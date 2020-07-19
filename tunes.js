
let songs = [];

function listGen() { // This way worked fine, but I built a loop to iterate through my array when Javascript already has forEach, which does that for me.
    var text = "<ul>";
    for (let i = 0; i < songs.length; i++) {
        text += "<a onclick=\"songPlayed(this)\" href=\"https://www.youtube.com/results?search_query=" + songs[i] + "\" target=\"_blank\"><li class=\"looks\" id=\"" + i + "\">" + songs[i] + "<span>&#9658;</span></li></a>";
    }
    text += "</ul>";
    document.getElementById("songList").innerHTML = text;
}

function listGen2(item,index) { // The new hotness.  The 
    document.getElementById("theTunes").innerHTML += "\n<li class=\"looks\" id=\"" + index + "\"><a onclick=\"songPlayed(this)\" href=\"https://www.youtube.com/results?search_query=" + item + "\" target=\"_blank\">" + item + "<span>&#9658;</span></li></a>\n";
}

function songRequest() {
    if (document.getElementById("request").value.trim() != "") { 
        
        // This is checking for the input being only spaces or nothing at all - Theoretically, myString && !myString.trim() should have worked, but then it didn't?  According to stackoverflow anyway.  I could also test a regex which looks for at least one character of not whitespace: /\S/.test(string) which might be more compatible with older browsers.  But who's going to be using this in IE8, rly?

        songs.push(document.getElementById("request").value.trim()); // We're trimming leading and trailing spaces before shoving the input into the array
        document.getElementById("theTunes").innerHTML = ""; // Empty out the <ul>
        songs.forEach(listGen2); // Generate the list
        document.getElementById("request").value = ""; // Clear out the text input.
    }
}

function songPlayed(id) {
    let i = id.parentNode.id;
    songs.splice(i,1);
    document.getElementById("theTunes").innerHTML = "";
    songs.forEach(listGen2);   
}

function pressEnter() {
    if (event.keyCode == 13) {
        songRequest();
    }
}

/**
 * Check into how this works, from Lothus: https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/array/indexof
 * It will avoid rebuilding the ul every time, and maybe give me the ability to style the removal of the element with an animation or something.
 * 
 * function songPlayed(id) {
 * var listItem = id.parentNode;
 * var listRoot = listItem.parentNode;
 * var i = Array.prototype.indexOf.call(listRoot.children, listItem);
 * songs.splice(i,1);
 * listRoot.removeChild(listItem);
 * };
 * 
 */

