var totalChildren = {
    f1: 1,
    f2: 1,
    s: 1,
    sm: 1,
}

function onUpdateIndividual(grade) {
    for (i = 0; i < totalChildren[grade]; i++) {
        if (document.getElementById(grade + "div").children[i].value == "" && totalChildren[grade] > 1) {
            document.getElementById(grade + "div").children[i].remove();
            i -= 1;
            totalChildren[grade] -= 1
            
        }
    }

    if (document.getElementById(grade + "div").children[totalChildren[grade] - 1].value != "") {
            totalChildren[grade] += 1;

            var input = document.createElement("input");
            var br = document.createElement("br");
            input.type = "number";
            input.placeholder = "Individual Grade";
            input.oninput = function(){ return onUpdateIndividual(grade) };
            document.getElementById(grade + "div").appendChild(input);
        }
    
    var total = 0;
    for (i = 0; i < totalChildren[grade] - 1; i++) {
        total += parseFloat(document.getElementById(grade + "div").children[i].value);
    }

    total /= totalChildren[grade] - 1;

    document.getElementById(grade).value = round(total);
    onUpdateAverage();
}