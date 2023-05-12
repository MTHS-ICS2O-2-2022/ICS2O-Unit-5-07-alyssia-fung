// Copyright (c) 2022 Alyssia fung All rights reserved
//
// Created by: Alyssia fung
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-07-HTML/sw.js", {
    scope: "/ICS2O-Unit5-07-HTML/",
  })
}

/**
 * This function does multiplication.
 */
function myButtonClicked() {
  var numA = parseFloat(document.getElementById("firstInputedNumber").value)
  var product = 0
  var counter = 0

  while (counter <= numA) {
    product = product + counter
    counter++
  }

  document.getElementById("product").innerHTML = "The product is: " + product
}
Footer
