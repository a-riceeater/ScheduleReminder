/*if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./worker.js');
}

document.querySelector('.create-schedule').onclick = async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    Notification.requestPermission().then(permission => {
        if (permission !== 'granted') {
            alert('you need to allow push notifications');
        } else {
            const timestamp = new Date().getTime() + 5 * 1000; // now plus 5000ms
            reg.showNotification(
                'Schedule Reminder',
                {
                    tag: timestamp, // a unique ID
                    body: '1st period starts in 5 minutes!', // content of the push notification
                    showTrigger: new TimestampTrigger(timestamp), // set the time for the push notification
                    data: {
                        url: window.location.href,
                    }//,
                    //badge: './assets/badge.png',
                    //icon: './assets/icon.png',
                }
            );
        }
    });
};*/