"use strict";
console.log("Hallo");
console.log("huhu");
/////////////////////////////////////
//test für die Typen
var zahl = 7;
var text = "    TypeScript ist toll!    ";
//console.log(zahl.trim());
console.log(text.trim());
function add(variable1, variable2) {
    return console.log(variable1 + variable2);
}
//add("2", 2);
add(2, 2);
//optionale Typen und Unions
function GetModuleInformation(name, semester) {
    //mache etwas :)
}
GetModuleInformation("PBO", 7);
GetModuleInformation("PBO", "7");
GetModuleInformation("PBO");
GetModuleInformation("PBO", [2, 3, 4]);
//GetModuleInformation("PBO", 7, "7"); --> Fehler, da zu viele Parameter
//GetModuleInformation("PBO", true); --> Fehler, da boolean
////////////////////////////////////////////////
//Enumeration(Aufzählung)
var Group;
(function (Group) {
    Group[Group["Theory"] = 0] = "Theory";
    Group[Group["Informatics"] = 1] = "Informatics";
    Group[Group["Computergraphics"] = 2] = "Computergraphics";
    Group[Group["Design"] = 3] = "Design";
})(Group || (Group = {}));
//Objekt
var module = {
    name: "Programmierung von Benutzeroberflächen",
    semester: 7,
    credits: 5,
    group: Group[Group.Informatics]
};
//Array von Objekten
var moduleList = [
    { name: "GDG", semester: 1, credits: 2, group: Group[Group.Design] },
    { name: "RNKS", semester: 3, credits: 5, group: Group[Group.Informatics] },
    { name: "CGV II", semester: 4, credits: 4, group: Group[Group.Computergraphics] }
];
//Generics, Array ist hier ein Interface von Typescript
var moduleListG = [
    { name: "GDG", semester: 1, credits: 2, group: Group[Group.Design] },
    { name: "RNKS", semester: 3, credits: 5, group: Group[Group.Informatics] },
    { name: "CGV II", semester: 4, credits: 4, group: Group[Group.Computergraphics] }
];
//Object zu Array hinzufügen
moduleList.push(module);
//Array ausgeben mit einer anonymen Funktion (Arrow Function)
function PrintModuleList(moduleList) {
    moduleList.forEach(function (element) { return console.log(element); });
}
//Aufruf
PrintModuleList(moduleList);
//Klassen; Private Varibalen können einfach im constructor angegeben werden
var Module = /** @class */ (function () {
    //private _moduleInside;
    function Module(_module) {
        this._module = _module;
        //this._moduleInside = _module;
    }
    //Funktion ohne Keyword
    Module.prototype.PrintListClass = function () {
        moduleList.push(this._module);
        console.log(moduleList);
    };
    return Module;
}());
var PBO = new Module(module);
//Funktionsaufruf
PBO.PrintListClass();
