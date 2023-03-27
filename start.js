"use strict";
const rl = require("readlinesync");
const fs = require("fs");
var visiteur = [];  
visiteur.push('mohamed','ali');
var nourriture = ["pates","riz","poulet","poisson","salade","soupe","pizza","burger","sandwich","poulet frit","poulet grillé","poulet rôti"];
var boisson = ["coca","eau"];
var fruit = ["mangue", "banane"];
function manger() {
    var nourriture = rl.question("Qu'est-ce que vous avez mangé?");
    var boisson = rl.question("Qu'est-ce que vous avez bu?");
    var fruit = rl.question("Qu'est-ce que vous avez mangé?");
    visiteur.push(nourriture, boisson, fruit);
    console.log(visiteur);
}
manger();

