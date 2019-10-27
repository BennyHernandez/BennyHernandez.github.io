$(".enabled-2cQ-u7[aria-label='Mute']").click(function() {
    sendMute(false);
});
$(".enabled-2cQ-u7[aria-label='Unmute']").click(function () {
    sendMute(true);
});

function sendMute(value) {
    $.ajax({
        url: 'http://127.0.0.1:5000/lightControl',
        type: 'POST',
        data: JSON.stringify({ "type": "mute", "value": value}),
        success: function (response) { console.log("Sent to bot!") }
    });
}

function sendDeafen(value) {
    $.ajax({
        url: 'http://127.0.0.1:5000/lightControl',
        type: 'POST',
        data: JSON.stringify({ "type": "mute", "value": value}),
        success: function (response) { console.log("Sent to bot!") }
    });
}