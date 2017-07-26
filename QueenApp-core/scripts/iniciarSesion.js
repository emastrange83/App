var runsesion=document.getElementById("runsesion");
runsesion.addEventListener("click", function() { 
//Ajax request using jQuery
var everlive = new Everlive({
    appId: "hcivrqvp7wd55hly",
    scheme: "https"
});

var username = 'smith';
var password = 'conejo333';

everlive.authentication.login(username, password, function(data) {
    var accessToken = data.result.access_token;
    alert("Successfully logged the user in! Received access token: " + accessToken);
}, function(err) {
    alert("Unfortunately an error occurred: " + err.message);
});
    });
                                    });