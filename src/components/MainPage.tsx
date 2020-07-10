import React, {useEffect, useState} from "react";
import {AppBar, Button, createStyles, Theme, Typography} from "@material-ui/core";
import noti from '../nootificationWorker'
import {makeStyles} from "@material-ui/core/styles";
import {log, showNotification} from "../containers/AppNotification";

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
    useEffect(()=>{askUserPermission()},[])//setWorker(new Worker(URL.createObjectURL(worker.toString()))),[])
    notificationWorker.addEventListener('result',(msg)=>log())

    const classes = useStyles();
    let clickSendNotification = ()=>{
        console.log(navigator.serviceWorker.controller)
        navigator.serviceWorker.controller?.postMessage({opCode:'message'})
    } //notificationWorker.postMessage("notify");

    return  <>
        <AppBar position="static"> <Typography variant="h6" className={classes.title} >
            Cuando vence
            </Typography>
        </AppBar>
        <Button variant="contained" color="primary" onClick={clickSendNotification} > Show Notif after 3 seconds</Button>
        v7
        </>
}