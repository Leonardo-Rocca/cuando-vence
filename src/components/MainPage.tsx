import React, {useEffect, useState} from "react";
import {AppBar, Box, Button, createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import firebase from "../firebase";
import {showNotification} from "../containers/AppNotification";
import {myFetch} from "../containers/myFetch";

let F_MESSAGING = firebase.messaging();

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                flexGrow: 1,
            },
            menuButton: {
                marginRight: theme.spacing(2),
            },
            title: {
                flexGrow: 1,
            },
        }),
    );
async function askUserPermission() {
    return await Notification.requestPermission();
}

interface Product {
    token: string;
    name: string;
    userId: string;
    expireDate: number;
}

export default ({firebase}:any)=>{
    const [token,setToken] =useState('')
    useEffect(()=>{
        const messaging =  F_MESSAGING;
        askUserPermission().then(async function() {
            const token = await messaging.getToken();
            return token
        }).then(setToken)
            .catch(function(err) {
            console.log("Unable to get permission to notify.", err);
         //   alert("Unable to get permission to notify."+ err);
        });
      //  messaging.getToken().then(setToken)

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));

        messaging.onTokenRefresh(() => {
            messaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the app server.
                //setTokenSentToServer(false);
                // Send Instance ID token to app server.
                setToken(refreshedToken);
            }).catch((err) => {
                console.log('Unable to retrieve refreshed token ', err);
                alert('Unable to retrieve refreshed token '+ err);
            });
        });

    },[])

    const classes = useStyles();
    let clickSendNotification = ()=> {
        showNotification("asas")
    }
//     clickSendNotification = ()=>console.log({type:"notify",w:navigator.serviceWorker.ready});

    function subscribeUser() {
        navigator.serviceWorker.ready.then(function(reg) {

            reg.pushManager.subscribe({
                applicationServerKey:"BGNFTJy7-RHmBkIJsqzRIyIv4Z2qPoChB7A2Wqzmi_n8zMVxzcPSy1ksrgha3CFma8JCqX4AfJ6W4_BTZDRjST8",
                userVisibleOnly: true
            }).then(function(sub) {
                console.log('Endpoint URL: ', sub.endpoint);
            }).catch(function(e) {
                if (Notification.permission === 'denied') {
                    console.warn('Permission for notifications was denied');
                } else {
                    console.error('Unable to subscribe to push', e);
                }
            });
        })
    }

    let loadProducts=() => {
        const db = firebase.firestore();
        db.collection("products").get().then((querySnapshot: any) => {
            querySnapshot.forEach((doc: { id: any; data: () => any; }) => {
                console.log(`${doc.id} => `,doc.data());
            });
            console.log("snapS", querySnapshot)
        });
    }

    let checkForUpdates =()=>{
        const db = firebase.firestore();
        db.collection("products").get().then((querySnapshot: any) => {

            querySnapshot.forEach((snap: { data: () => Partial<Product>})=>{
                const elem = snap.data()
                console.log(elem)
                if (!elem.expireDate || !elem.token)
                    return;
                if (  elem.expireDate <new Date().getTime())
                    myFetch("https://fcm.googleapis.com/fcm/send","POST",{"to":"eY7uHy4MbH2orOq95edKi8:APA91bE5TuTy2bE8CS_FJKC5fhOfXAWI7e1WymhjmNr7WzI062wfBut-bGPVPF7pjlkKjksLC6WiuVYeM1FVB1XD11KuZ8WhAH1CCJCZv2NySkn36L6JAF6xe5l4A-9AoEwgL_5IDNqO","notification":{"body":"Yellow"},"priority":10})
                        .then(console.log)
                    })

        })
    }

    return  <>
        <AppBar position="static">
            <Typography variant="h6" className={classes.title} >
            Cuando vence
            </Typography>
        </AppBar>
        <br/>
        <Box display="flex" flexDirection="column"  maxWidth="25%" m={4}>
            <Button variant="contained" color="primary" onClick={clickSendNotification} > Show Notif after 3 seconds</Button>
            v13

            <Button variant="outlined" color="primary" onClick={askUserPermission} > ask User Permission</Button>
            <Button variant="contained" color="primary" onClick={subscribeUser} > subscribe User</Button>
            <br />
            <Button variant="outlined" color="primary" onClick={loadProducts} > Load data</Button>
            <Button variant="outlined" color="primary" onClick={checkForUpdates} > check For Updates</Button>

        </Box>
        token: {token}
    </>
}

