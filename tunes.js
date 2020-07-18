
let songs = [];

function songRequest() {
    songs.push(document.getElementById("request").value);
    text = "<ul id=\"songTitle\">";
    for (i = 0; i < songs.length; i++) {
        text += "<li id=\"" + i + "\">" + songs[i] + "<span><a onclick=\"songPlayed(this)\" href=\"https://www.youtube.com/results?search_query=" + songs[i] + "\" target=\"_blank\">&#9658;</a></span></li>";
    }
    text += "</ul>";
    document.getElementById("songlist").innerHTML = text;
    document.getElementById("request").value = "";
}

function songPlayed(id) {
    i = id.parentNode.parentNode.id;
    songs.splice(i,1);
    text = "<ul class=\"songTitle\">";
    for (i = 0; i < songs.length; i++) {
        text += "<li id=\"" + i + "\">" + songs[i] + "<span><a onclick=\"songPlayed(this)\" href=\"https://www.youtube.com/results?search_query=" + songs[i] + "\" target=\"_blank\">&#9658;</a></span></li>";
    }
    text += "</ul>";
    document.getElementById("songlist").innerHTML = text;
}

