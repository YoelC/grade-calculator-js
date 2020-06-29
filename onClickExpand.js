var dropped = {
    f1: false,
    f2: false,
    s: false,
    sm: false,
}

function onClickExpand(grade) {
    dropped[grade] = !dropped[grade];

    if (dropped[grade]) {
        document.getElementById(grade + "button").value = "↑";
        document.getElementById(grade + "div").hidden = false;

    } else {
        document.getElementById(grade + "button").value = "↓"
        document.getElementById(grade + "div").hidden = true;
    }

}
