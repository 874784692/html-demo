var tab = function (id, event) {
    var oDiv = document.getElementById(id);
    var oBtn = oDiv.getElementsByTagName("li");
    var oBox = oDiv.getElementsByTagName("div");
    for (var i = 0; i < oBtn.length; i++) {
        (function (index) {
            oBtn[i].addEventListener(event, function () {
                for (var i = 0; i < oBtn.length; i++) {
                    oBtn[i].className = '';
                    oBox[i].className = 'tabSide';
                }
                this.className = 'active';
                oBox[index].className = 'active';
            });
        })(i)
    }
}
window.onload = function () {
    tab("tabMain", "click");
    tab("tabMain1", "click");
    tab("tabMain2", "mouseover");
}