document.addEventListener('DOMContentLoaded', function() {
    if(window.location.hash) {
        var width = (parseInt(document.getElementById("online").offsetWidth)-5 <= 400) ? 400 : parseInt(document.getElementById("online").offsetWidth)-5;
        var height = parseInt(document.getElementById("online").offsetHeight)-14;
        var data = window.location.hash.substring(1).split("///");
        document.title = decodeURIComponent(data[1]);
        if (data[2] == "online") {
            var url = data[0].split("?");
            if (url[1] === undefined) {url[1] = "";}
            document.getElementById("online").innerHTML = '<iframe src="'+url[0]+'?'+url[1]+'&h='+height+'&w='+width+'" width="100%" height="100%" frameborder="0" allowfullscreen></iframe>';
        }
        else if (data[2] == "acestream") {
            width = width-9;
            document.getElementById("online").innerHTML = '<embed id="plugin" type="application/x-acestream-plugin" width="'+width+'" height="'+height+'" nofscontrolsenable="true"/>';
            var plugin = document.getElementById("plugin");
            if(plugin.playlistLoadAsync) {
                plugin.playlistLoadAsync(data[0], 0, 0, 0);
            }
            else {
                //document.getElementById("online").innerHTML = "<div style='color: #FFFFFF; text-align: center; margin: 10px; font-family: Verdana, Arial, Helvetica, sans-serif;'><a href='http://dl.acestream.org/products/acestream-full/win/latest' target='_blank'><img src='/img/tutorial.png'></a></div>";
            }
        }
    } else {
        document.getElementById("online").innerHTML = "<h1 style='color: #c5c5c5; margin: 20px;'>KuHa HE 6yDeT!</h1>";
    }
});