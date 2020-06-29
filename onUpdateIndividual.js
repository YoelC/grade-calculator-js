var totalChildren = 1;
function onUpdateIndividual() {

    for (i = 0; i < totalChildren; i++) {
        if (document.getElementById("f1div").children[i].value == "" && totalChildren > 1) {
            document.getElementById("f1div").children[i].remove();
            i -= 1;
            totalChildren -= 1
            
        }
    }

    if (document.getElementById("f1div").children[totalChildren - 1].value != "") {
            totalChildren += 1;

            var input = document.createElement("input");
            var br = document.createElement("br");
            input.type = "number";
            input.placeholder = "Individual Grade";
            input.oninput = onUpdateIndividual;
            document.getElementById("f1div").appendChild(input);
        }
    
    var total = 0;
    for (i = 0; i < totalChildren - 1; i++) {
        total += parseFloat(document.getElementById("f1div").children[i].value);
    }

    total /= totalChildren - 1;

    document.getElementById("f1").value = round(total);
    onUpdateAverage();
}