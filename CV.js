"use strict";

// Get dynamic CV elements
const name = document.getElementById("cv-name");
const address = document.getElementById("cv-address");
const numNat = document.getElementById("cv-num-nat");
const email = document.getElementById("cv-email");

const cvName = localStorage.getItem("cv-name");
const cvAddress = localStorage.getItem("cv-address");
const cvNumNat = localStorage.getItem("cv-numNat");
const cvEmail = localStorage.getItem("cv-email");

name.innerHTML = cvName;
address.innerHTML = cvAddress;
numNat.innerHTML = cvNumNat + " / Nigerian";
email.innerHTML = cvEmail + " / http://linkedin.chinwe-ibegbu.com/";

