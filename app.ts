console.log("Hallo");
console.log("huhu");
/////////////////////////////////////


//test für die Typen
var zahl = 7;
var text = "    TypeScript ist toll!    ";

//console.log(zahl.trim());
console.log(text.trim());


function add(variable1:number, variable2:number){
    return console.log(variable1 + variable2);
}

//add("2", 2);
add(2, 2);

//optionale Typen und Unions
function GetModuleInformation(name:string, semester?:number|string|number[]){
    //mache etwas :)
}

GetModuleInformation("PBO", 7);
GetModuleInformation("PBO", "7");
GetModuleInformation("PBO");
GetModuleInformation("PBO", [2,3,4]);
//GetModuleInformation("PBO", 7, "7"); --> Fehler, da zu viele Parameter
//GetModuleInformation("PBO", true); --> Fehler, da boolean


////////////////////////////////////////////////

//Enumeration(Aufzählung)
enum Group {Theory, Informatics, Computergraphics, Design}

//interface
interface IModule{
    name: string;
    semester:number;
    credits: number;
    group: string;
}

//Objekt
var module:IModule = {
    name: "Programmierung von Benutzeroberflächen",
    semester: 7,
    credits: 5,
    group:Group[Group.Informatics]
}

//Array von Objekten
var moduleList:IModule[] = [
    {name: "GDG", semester: 1, credits:2, group:Group[Group.Design]},
    {name: "RNKS", semester: 3, credits:5, group:Group[Group.Informatics]},
    {name: "CGV II", semester: 4, credits:4, group:Group[Group.Computergraphics]}
]


//Generics, Array ist hier ein Interface von Typescript
var moduleListG:Array<IModule> = [
    {name: "GDG", semester: 1, credits:2, group:Group[Group.Design]},
    {name: "RNKS", semester: 3, credits:5, group:Group[Group.Informatics]},
    {name: "CGV II", semester: 4, credits:4, group:Group[Group.Computergraphics]}
]

//Object zu Array hinzufügen
moduleList.push(module);


//Array ausgeben mit einer anonymen Funktion (Arrow Function)
function PrintModuleList(moduleList:IModule[]){
    moduleList.forEach(
        element => console.log(element)
    );
}

//Aufruf
PrintModuleList(moduleList);


//Klassen; Private Varibalen können einfach im constructor angegeben werden
class Module{
    //private _moduleInside;

    constructor(private _module){
        //this._moduleInside = _module;
    }

    //Funktion ohne Keyword
    PrintListClass():void{
        moduleList.push(this._module);
        console.log(moduleList);
    }
}

let PBO = new Module(module);
//Funktionsaufruf
PBO.PrintListClass();