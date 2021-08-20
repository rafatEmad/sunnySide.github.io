"use strict";

window.onload = function () {
  $(".humMenu").on("click", function () {
    $(".fixedMenu").css({
      "display": 'block'
    });
  });
  $(".mmenu").on("click", function () {
    $(".fixedMenu").css({
      "display": 'none'
    });
  });
  $(".fixedMenu").on("click", function () {
    $(".fixedMenu").css({
      "display": 'none'
    });
  });
};