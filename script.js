
let re;
let str;
let choice;
choice = prompt("Please Enter a or b or c: \na.Postal Code \nb.Mobile Number \nc.E-mail address");


if (choice == "a") {
    re = /^[0-9]{4}$/;
    str = prompt("Plrase enter the postal code:");
    if (re.test(str) == true) {
        alert("Valid postal code!!");
    }
    else {
        alert("Invalid postal code!!");
    }
}

else if (choice == "b") {
    re = /^01[0-9]{9}$/;
    str = prompt("Please enter the mobile number:");
    if (re.test(str) == true) {
        alert("Valid mobile number!!");
    }
    else {
        alert("Invalid mobile number!!");
    }
}

else if (choice == "c") {
    re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/;
    str = prompt("Please enter the e-mail address:");
    if (re.test(str) == true) {
        alert("Valid E-mail address!!");
    }
    else {
        alert("Invalid E-mail address!!");
    }
}
else {
    alert("Please Enter a/b/c");
}
