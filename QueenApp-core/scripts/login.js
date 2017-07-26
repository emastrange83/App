var registrarme=document.getElementById("registrarme");
registrarme.addEventListener("click", function() { 
//Ajax request using jQuery
var el = new Everlive('hcivrqvp7wd55hly');
var username = 'godmode';
var password = '7=31337';
var attrs = {
    Email: 'clashofclans@default.com',
    DisplayName: 'GODGuy'
};

el.Users.register(username,
    password,
    attrs,
    function(data) {
        alert("Usuario Correctamente registrado");
    },
    function(error) {
        alert("ERROR no se registro la cuenta");
    });
                                    });

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
    alert("Iniciaste correctamente sesion tanto que te regalan un token: " + accessToken);
}, function(err) {
    alert("Unfortunately an error occurred: " + err.message);
});
                                    });


var regis=document.getElementById("registrarme2");
var usr1=document.getElementById("usr1");
var pswd=document.getElementById("pswd");
var email=document.getElementById("email");
var nick=document.getElementById("nick");
regis.addEventListener("click", function() { 
//Ajax request using jQuery
var el = new Everlive('hcivrqvp7wd55hly');
var username = $(usr1).val();
var password = $(pswd).val();
var attrs = {
    Email: $(email).val(),
    DisplayName: $(email).val()
};

el.Users.register(username,
    password,
    attrs,
    function(data) {
        alert("Usuario Correctamente registrado");
    },
    function(error) {
        alert("ERROR no se registro la cuenta");
    });
                                    });