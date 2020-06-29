var f1dropped = false;

function onClickExpand() {
    f1dropped = !f1dropped;

    if (f1dropped) {
        document.getElementById("f1button").value = "↑";
        document.getElementById("f1div").hidden = false;

    } else {
        document.getElementById("f1button").value = "↓"
        document.getElementById("f1div").hidden = true;
    }

}
