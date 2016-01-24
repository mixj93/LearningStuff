function showPic (whichpic) {
    var source = whichpic.getAttribute("href");
    var desc = whichpic.getAttribute("title");
    var placeholder = document.getElementById("placeholder");
    var description = document.getElementById("description");

    placeholder.setAttribute("src", source);
    description.firstChild.nodeValue = desc;
}

function countBodyChildren () {
    var bodyElem = document.getElementsByTagName('body')[0];
    alert(bodyElem.childNodes.length);
}
// window.onload = countBodyChildren;

function popUp (winUrl) {
    window.open(winUrl, "Popup", "width=400,height=300");
}

function prepareLinks () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute("class") == 'popup') {
            links[i].onclick = function () {
                popUp(this.getAttribute('href'));
                return false;
            }
        }
    };
}

window.onload = prepareLinks;