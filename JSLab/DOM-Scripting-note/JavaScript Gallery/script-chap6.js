function showPic (whichpic) {
    if(!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);

    if (document.getElementById("description")) {
        var description = document.getElementById("description");
        if (whichpic.getAttribute("title")) {
            var desc = whichpic.getAttribute("title");
        } else {
            var desc = "";
        }
        description.firstChild.nodeValue = desc;
    }

    return true;
}

function prepareGallery () {
    // 测试兼容性
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("imageGallery")) return false;

    var gallery = document.getElementById("imageGallery")
    var links = gallery.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            return showPic(this) ? false : true;
        };
    };

}

window.onload = function () {
    prepareGallery();
}