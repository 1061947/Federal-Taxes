let btn = document.getElementById("myButton");
let income = document.getElementById("input");
let totalTax = document.getElementById("tax");
let netIncome = document.getElementById("net");
let monthlyIncome = document.getElementById("monthly");
let taxRate = document.getElementById("rate")

btn.addEventListener("click", button_clicked);

function button_clicked() {
    let rate = income.value;
    let tax = 0;
    let net = income.value;
    if (income.value >= 11000) {
        tax = 1100;
        income.value -= 11000;
        if (income.value >= 33725) {
            tax += 4047;
            income.value -= 33725;
            if (income.value >= 50650) {
                tax += 11143;
                income.value -= 50650;
                if (income.value >= 86725) {
                    tax += 20814;
                    income.value -= 86725;
                    if (income.value >= 49150) {
                        tax += 15728;
                        income.value -= 49150;
                        if (income.value >= 346875) {
                            tax += 121406.25;
                            income.value -= 346875;
                            if (income.value > 0) {
                                tax += income.value * 0.37;
                                totalTax.textContent = tax;
                            }
                            else {
                                net += income.value;
                                totalTax.textContent = tax;
                            }
                        }
                        else {
                            tax += income.value * 0.35;
                            totalTax.textContent = tax;
                        }
                    }
                    else {
                        tax += income.value * 0.32;
                        totalTax.textContent = tax;
                    }
                }
                else {
                    tax += income.value * 0.24;
                    totalTax.textContent = tax;
                }
            }
            else{
                tax += income.value * 0.22;
                totalTax.textContent = tax;
            }
        }
        else {
            tax += income.value * 0.12;
            totalTax.textContent = tax;
        }
    }
    else {
        totalTax.textContent = income * 0.1;
        totalTax.textContent = tax;
    }
    net -= tax;
    monthlyIncome.textContent = net/12;
    netIncome.textContent = net;
    taxRate.textContent = tax/rate;
    income.value = rate;
}