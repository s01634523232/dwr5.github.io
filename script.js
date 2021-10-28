function updatePrice() {
    let s = document.getElementsByName("prodType");
    let select = s[0];
    let n = document.getElementsByName("number");
    let num = n[0];
    let price = 0;
    let prices = getPrices();
    let priceIndex = parseInt(select.value) - 1;
    if (priceIndex >= 0) {
        price = prices.prodTypes[priceIndex];
    }

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = (select.value == "2" ? "block" : "none");

    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        if (radio.checked) {
            let optionPrice = prices.prodOptions[radio.value];
            if (optionPrice !== undefined) {
                price += optionPrice;
            }
        }
    });

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = (select.value == "3" ? "block" : "none");

    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        if (checkbox.checked) {
            let propPrice = prices.prodProperties[checkbox.name];
            if (propPrice !== undefined) {
                price += propPrice;
            }
        }
    });

    let result = document.getElementById("result");

    if (isNaN(num.value)) {
        result.innerHTML = "0-9 nubmer";
    } else {
        result.innerHTML = num.value * price + " rub";
    }
}

function getPrices() {
    return {
        prodTypes: [8000, 15000, 34000],
        prodOptions: {
            option1: 8000,
            option2: 3000,
            option3: 6000,
        },
        prodProperties: {
            prop1: 4000,
            prop2: 10000,
        }
    };
}

window.addEventListener('DOMContentLoaded', function (event) {

    let radioDiv = document.getElementById("radios");
    radioDiv.style.display = "none";

    let checkDiv = document.getElementById("checkboxes");
    checkDiv.style.display = "none";

    let n = document.getElementsByName("number");
    let num = n[0];

    num.addEventListener("input", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    let s = document.getElementsByName("prodType");
    let select = s[0];

    select.addEventListener("change", function (event) {
        let target = event.target;
        console.log(target.value);
        updatePrice();
    });

    
    let radios = document.getElementsByName("prodOptions");
    radios.forEach(function (radio) {
        radio.addEventListener("change", function (event) {
            let r = event.target;
            console.log(r.value);
            updatePrice();
        });
    });


    let checkboxes = document.querySelectorAll("#checkboxes input");
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function (event) {
            let c = event.target;
            console.log(c.name);
            console.log(c.value);
            updatePrice();
        });
    });

    updatePrice();
});
