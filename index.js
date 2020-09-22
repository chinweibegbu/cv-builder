"use strict";

// Get related elements on the HTML page
const submit = document.getElementById('submit');
const form = document.getElementById('addForm');


// Get elements to validate from the form
const fname = form.elements["first-name"];
const mname = form.elements["middle-name"];
const lname = form.elements["last-name"];
const gender = form.elements["genders"];
const address = form.elements["address"];
const number = form.elements["number"];
const email = form.elements["email"];

// Handle validation with the submit button
function onSubmit(event) {

    // Prevent default behaviour for the "submit" input type
    event.preventDefault();

    // Clear all previously saved details
    localStorage.clear;
    fname.classList.remove("error");
    mname.classList.remove("error");
    lname.classList.remove("error");
    gender.classList.remove("error");
    address.classList.remove("error");
    number.classList.remove("error");
    email.classList.remove("error");

    // This variable is for error handling
    let hasError = false;

    // Create regex expressions for validation
    let nameReg = /^[a-zA-Z]+$/g;
    let phoneReg = /^[0-9]+$/g
    let emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // Reference for email regex: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript 



    /*** Validate all input fields ***/ 

    if(!fname.value) {
        hasError = true;
        fname.classList.add("error");
        fname.placeholder = "Enter a first name";
        if (!nameReg.test(fname.value)) {
            fname.placeholder = "Enter a valid first name";
        }
    }

    if(!mname.value) {
        hasError = true;
        mname.classList.add("error");
        mname.placeholder = "Enter a middle name";
        if (!nameReg.test(mname.value)) {
            mname.placeholder = "Enter a valid middle name";
        }
    }

    if(!lname.value) {
        hasError = true;
        lname.classList.add("error");
        lname.placeholder = "Enter a last name";
        if (!nameReg.test(lname.value)) {
            lname.placeholder = "Enter a valid last name";
        }
    }

    if (!gender.value) {
        lname.classList.add("error");
        gender.placeholder = "Pick a gender";
        hasError = true;
    }

    if(!address.value) {
        hasError = true;
        address.classList.add("error");
        address.placeholder = "Enter an address name";
        if (!nameReg.test(address.value)) {
            address.placeholder = "Enter a valid address";
        }
    }

    if(!number.value) {
        hasError = true;
        number.classList.add("error");
        number.placeholder = "Enter a phone number name";
        if (!phoneReg.test(number.value)) {
            number.placeholder = "Enter a valid phone number";
        }
    }

    if(!email.value) {
        hasError = true;
        email.classList.add("error");
        email.placeholder = "Enter an email address";
        if (!emailReg.test(email.value)) {
            email.placeholder = "Enter a valid first email address";
        }
    }


    // Submit based on the error state
    if (!hasError) {
        localStorage.setItem("cv-name", fname.value+" "+mname.value+" "+lname.value);
        localStorage.setItem("cv-address", address.value);
        localStorage.setItem("cv-numNat", number.value);
        localStorage.setItem("cv-email", email.value);
        window.location="CV.html";
    }
}

form.addEventListener('submit', onSubmit);


