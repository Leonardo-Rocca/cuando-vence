import React, {useEffect, useState} from "react";
import {AppBar, Button, createStyles, Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import firebase from "../firebase";

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
            alert("Unable to get permission to notify."+ err);
        });
      //  messaging.getToken().then(setToken)

        navigator.serviceWorker.addEventListener("message", (message) => console.log(message));
    },[])

    const classes = useStyles();
    let clickSendNotification = ()=> {

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

    return  <>
        <AppBar position="static"> <Typography variant="h6" className={classes.title} >
            Cuando vence
            </Typography>
        </AppBar>
        <br/>
        <Button variant="contained" color="primary" onClick={clickSendNotification} > Show Notif after 3 seconds</Button>
        v13

        <Button variant="outlined" color="primary" onClick={askUserPermission} > ask User Permission</Button>
        <Button variant="contained" color="primary" onClick={subscribeUser} > subscribe User</Button>
        <Button variant="contained" color="primary" onClick={()=>null} > Cancel suscription</Button>

        token: {token}
    </>
}

