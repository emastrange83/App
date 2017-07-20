$("#enviarTicket").click(function (event) {
//Solicitud usando jQuery
var object = {
    "Name": "box",
    "Title": "ticket"
	""
};

$.ajax({
    url: 'https://api.everlive.com/v1/Metadata/Applications/your-app-id/Types/',
    type: "POST",
    headers:
    {
        "Authorization" : "sfGu1XrDkYZR4lS2rremcb63rBcvhybb"
    },
    contentType: "application/json",
    data: JSON.stringify(object),
    success: function(data){
        alert(JSON.stringify(data));
    },
    error: function(error){
        alert(JSON.stringify(error));
    }
})
});+632 