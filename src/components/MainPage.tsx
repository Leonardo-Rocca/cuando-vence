import React, {useEffect, useState} from "react";
import {AppBar, Button, createStyles, Theme, Typography} from "@material-ui/core";
import nootificationWorker from '../nootificationWorker'
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
export default ()=>{
    const [notificationWorker,setWorker]:[Worker,any] = useState(new Worker(nootificationWorker))
 //   useEffect(()=>setWorker(new Worker(URL.createObjectURL(worker.toString()))),[])
    notificationWorker.addEventListener('result',(msg)=>log())

    const classes = useStyles();
    let clickSendNotification = ()=>notificationWorker.postMessage("notify");
    return  <>
        <AppBar position="static"> <Typography variant="h6" className={classes.title} >
            Cuando vence
            </Typography>
        </AppBar>
        <Button onClick={clickSendNotification} > Show Notif after 3 seconds</Button>
        </>
}