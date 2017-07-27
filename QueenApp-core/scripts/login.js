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
