document.addEventListener("deviceready", onDeviceReady, false);
var enviarTicket = document.getElementById("enviarTicket");
var result = document.getElementById("result");
enviarTicket.addEventListener("click",
                                    function() {
                                        var object = { "Ticket" : "Serie:1a|folio:0001|Barritas:$10.00|Frutsi:$5.00|Helado:$15.00|RevistaPorno:$100.00|cigarros:$10.00|botellaVodka:$400.00|chicles:$5.00|Preservativos:90.00|Total:595.00|" };

                                        $.ajax({
                                        type: "POST",
                                        url: 'https://api.everlive.com/v1/hcivrqvp7wd55hly/Box',
                                        headers: { "Authorization" : "u8t0ht7v5r9075ru8ue5k7vyuhnkgtr4" },
                                        contentType: "application/json",
                                        data: JSON.stringify(object),
                                        success: function(data) {
                                        alert("Se Envio el registro");
                                        },
                                        error: function(error) {
                                        alert(JSON.stringify(error));
                                        }
                                        })
                                    });
function onDeviceReady() {
    navigator.splashscreen.hide();
    var app = new App();
    app.run();
}

function App() {
}

App.prototype = {
    resultsField: null,
     
    run: function() {
        var that = this,
        scanButton = document.getElementById("scanButton");
        
        that.resultsField = document.getElementById("result");
        
        scanButton.addEventListener("click",
                                    function() { 
                                        that._scan.call(that); 
                                    });
    },
    
    _scan: function() {
        var that = this;
        if (window.navigator.simulator === true) {
            alert("Not Supported in Simulator.");
        }
        else {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    if (!result.cancelled) {
                        that._addMessageToLog(result.format, result.text);    
                    }
                }, 
                function(error) {
                    alert("Scanning failed: " + error);
                });
        }
    },

    _addMessageToLog: function(format, text) {
        var that = this,
        currentMessage = that.resultsField.innerHTML,
        html = '<div class="row"><div class="col u-text-right"><label class="u-text-bold">' + format + '</label></div><div class="col u-text-left"><span class="u-color-accent">' + text + '</span></div></div>';
		
        that.resultsField.innerHTML = currentMessage + html;
    }
}

document.getElementById("#enviarTicket").addEventListener("click", function(){
    var el = new Everlive('hcivrqvp7wd55hly');
    var data = el.data('box');
    data.create({ 'TICKET' : 'venta1|venta2|venta3|total= :)' },
        function(data){
            alert(JSON.stringify(data));
        },
        function(error){
            alert(JSON.stringify(error));
});
        });