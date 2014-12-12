function mp() {
    console.log("Number of arguments: " + arguments.length);
    for (var i = 0; i < arguments.length; i++) {
        console.log(
            "Argumenrt[" + 
            i +
            "]" +
            " = " +
            arguments[i] +
            "(" +
            typeof (arguments[i])+
            ")");
    }
}

var f1 = mp(3, 4, "aaa");
f1;
console.log("=============");
var f2 = mp();
f2;
console.log("=============");
var f3 = mp(3, 4, ["asdasd",123.2,1212,"Asdadasd"]);
f3;
console.log("=============");

var func = function (){
    var object = {};
    object.name = "object";
    return object;
};
var f4 = mp(3, 4, "aaa",func().name);
f4;
console.log("=============");
var f5 = mp(null, 3, 4);
f5;
console.log("====== apply call =======");
var f6 = mp.apply(this,["aaa",22,55]);
f6;
console.log("=============");
var f7 = mp.call(this,55, "aaa");
f7;






//console.log(f1);


