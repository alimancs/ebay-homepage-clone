"use strict";
const dropDown = {
    catdrop:"off",
};
function show_off(menu, button, sign, signId) {
    let dd = document.querySelector(menu);
    let key = document.querySelector(button);
    let sym;
    let str = "";
    for (let letter of menu) {
        if (letter==="#") {
            continue;
        } else {
           str = str + letter;
        };
    }
    if (dropDown[str]==="off") {
        if (sign ==="yes") {
            sym = document.querySelector(signId);
            sym.style.transform = "translateY(0.2rem)";
            sym.style.transformOrigin = "top";
        };
        dropDown[str] = "on";
        dd.style.display = "grid";
        key.style.boxShadow = "0 0 2px grey";
    } else {
        if (sign ==="yes") {
            sym = document.querySelector(signId);
            sym.style.transform = "translateZ(0.2rem)";
            sym.style.transformOrigin = "bottom";
        };
        dropDown[str] = "off";
        dd.style.display = "none";
        key.style.boxShadow = "none";
    }
}
function ham(mode) {
    const menu =document.querySelector("#ham")
    if (mode==='close') {
        menu.style.display = "none";
    } else if(mode=='open') {
        menu.style.display = "flex";
    }
}
function load() {
    const body = document.querySelector("body");
    if (document.readyState !== "complete") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
        cancelAnimationFrame(load);
    }
    requestAnimationFrame(load);
}
load();
