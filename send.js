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