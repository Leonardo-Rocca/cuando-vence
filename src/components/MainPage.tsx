import React, {useEffect, useState} from "react";
import {AppBar, Button, createStyles, Theme, Typography} from "@material-ui/core";
import noti from '../nootificationWorker'
import {makeStyles} from "@material-ui/core/styles";
import {log, showNotification} from "../containers/AppNotification";
import firebase from "../firebase";

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

export default ()=>{
    const [notificationWorker,setWorker]:[Worker,any] = useState(new Worker(noti))
    const [token,setToken] =useState('')
    useEffect(()=>{
        const messaging =  firebase.messaging();
        messaging.getToken().then(setToken)
        askUserPermission().then(() =>  messaging.getToken().then(setToken))},[])
    useEffect(()=>  setWorker(new Worker( noti))  ,[])
  //  notificationWorker.addEventListener('result',(msg)=>log())

    const classes = useStyles();
    let clickSendNotification = ()=> {
//        navigator.serviceWorker.controller?.postMessage({opCode: 'message'})
        notificationWorker.postMessage({type: "notify"});
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

        <Button variant="contained" color="primary" onClick={subscribeUser} > subscribe User</Button>
        <Button variant="contained" color="primary" onClick={()=>null} > Cancel suscription</Button>

        token: {token}
    </>
}

