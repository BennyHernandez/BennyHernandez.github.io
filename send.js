$(".enabled-2cQ-u7[aria-label='Mute']").click(function () {
    sendMute($(this).attr("aria-label"));
});
$(".enabled-2cQ-u7[aria-label='Unmute']").click(function () {
    sendMute($(this).attr("aria-label"));
});

function sendMute(value) {
    $.ajax({
        url: 'http://127.0.0.1:5000/lightControl',
        type: 'POST',
        data: JSON.stringify({ "type": "mute", "value": value }),
        success: function (response) { console.log("Sent to bot!") }
    });
}

$(".enabled-2cQ-u7[aria-label='Deafen']").click(function () {
    sendDeafen($(this).attr("aria-label"));
});
$(".enabled-2cQ-u7[aria-label='Undeafen']").click(function () {
    sendDeafen($(this).attr("aria-label"));
});

function sendDeafen(value) {
    $.ajax({
        url: 'http://127.0.0.1:5000/lightControl',
        type: 'POST',
        data: JSON.stringify({ "type": "deafen", "value": value }),
        success: function (response) { console.log("Sent to bot!") }
    });
}

$(".content-3at_AU").click(function () {
    console.log("click");
    if ($(this).next("svg[name='Speaker']")) {
        console.log("click on voice");
    }
});

var notifcations, previousNotifications;

function notificationCheck() {
    notifcations = 0;
    $(".numberBadge-2s8kKX").each(function () {
        notifcations = notifcations + Number(this.innerHTML)
    });

    if (notifcations > previousNotifications) {
        sendNotification(notifcations);
    }
    previousNotifications = notifcations;
    setTimeout(notificationCheck, 1000);
}

notificationCheck();

function sendNotification(value) {
    $.ajax({
        url: 'http://127.0.0.1:5000/lightControl',
        type: 'POST',
        data: JSON.stringify({ "type": "notification", "value": value }),
        success: function (response) { console.log("Sent to bot!") }
    });
}