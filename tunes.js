
let songs = [];

function listGen() {
    var text = "<ul>";
    for (let i = 0; i < songs.length; i++) {
        text += "<a onclick=\"songPlayed(this)\" href=\"https://www.youtube.com/results?search_query=" + songs[i] + "\" target=\"_blank\"><li id=\"" + i + "\">" + songs[i] + "<span>&#9658;</span></li></a>";
    }
    text += "</ul>";
    document.getElementById("songList").innerHTML = text;
}

function songRequest() {
    songs.push(document.getElementById("request").value);
    listGen();
    document.getElementById("request").value = "";
}

function songPlayed(id) {
    let i = id.parentNode.parentNode.id;
    songs.splice(i,1);
    listGen();    
}

/**
 * Check into how this works, from Lothus: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/indexof
 * It will avoid rebuilding the ul every time, and maybe give me the ability to style the removal of the element with an animation or something.
 * 
 * function songPlayed(id) {
 * var listItem = id.parentNode.parentNode;
 * var listRoot = listItem.parentNode;
 * var i = Array.prototype.indexOf.call(listRoot.children, listItem);
 * songs.splice(i,1);
 * listRoot.removeChild(listItem);
 * };
 * 
 */

