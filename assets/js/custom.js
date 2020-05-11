// Add active class to the current button (highlight it)
var header = document.getElementById("custom-navbar");

var links = header.getElementsByClassName("nav-link");

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e) {
        var current = document.querySelector("a.text-primary");

        if (current) {
            current.className = current.className.replace(" text-primary", "");
        }

        e = e || window.event;
        var target = e.target || e.srcElement,
            text = target.textContent || target.innerText;   

        target.className += " text-primary"
    }, false);
}
