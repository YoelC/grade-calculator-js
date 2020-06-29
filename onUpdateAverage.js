function onUpdateAverage() {
    var f1 = document.getElementById("f1").value;
    var f2 = document.getElementById("f2").value;
    var s = document.getElementById("s").value;
    var sm = document.getElementById("sm").value;

    var f1Weight = document.getElementById("f1").value != "" ? 10.0 : 0;
    var f2Weight = document.getElementById("f2").value != "" ? 25.0 : 0;
    var sWeight = document.getElementById("s").value != "" ? 40.0 : 0;
    var smWeight = document.getElementById("sm").value != "" ? 25.0 : 0;

    var grade = (f1 * f1Weight + f2 * f2Weight + s * sWeight + sm * smWeight) / (f1Weight + f2Weight + sWeight + smWeight);
    if (isNaN(grade)) {
        document.getElementById("demo").innerHTML = "Your grade is undefined";
        return;
    }
    document.getElementById("demo").innerHTML = round(grade);

}