/* eslint-disable-next-line no-restricted-globals */
self.addEventListener("notificationclose", function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    console.debug('Closed notification: ' + primaryKey);
});

/* eslint-disable-next-line no-restricted-globals */
self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    var action = e.action;
    console.debug('Clicked notification: ' + primaryKey);
    if (action === 'close') {
        console.debug('Notification clicked and closed', primaryKey);
        notification.close();
    }
else {
        console.debug('Notification actioned', primaryKey);
        clients.openWindow('/');
        notification.close();
    }
});