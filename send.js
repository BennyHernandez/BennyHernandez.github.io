$(".enabled-2cQ-u7").click(function() {
  send();
});

function send() {
    $.ajax({
        url: 'http://127.0.0.1:5000/json-example',
        type: 'POST',
        data: JSON.stringify({"framework" : "test" }),
        success: function (response) { console.log("Sent to bot!") }
    });
}