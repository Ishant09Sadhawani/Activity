let helpObj=require("./comands/help");
let treeObj=require("./comands/tree");
let organizeObj=require("./comands/organize");
let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
if(command=="tree"){
    treeObj.fxn3(path);
}
if(command=="organize"){
    organizeObj.fxn2(path);
}
if(command=="help"){
    helpObj.fxn1(path);
}