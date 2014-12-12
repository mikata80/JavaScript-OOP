var arrListShapes = [];
function Shape(x, y, color) {
    return {
        x: x,
        y: y,
        color: color,
        draw: function draw() {
            var c = document.getElementById("allShapes");
            var ctx = c.getContext("2d");
            return ctx;
        },
        toString: function toString() {
            var res = (
                ": { x: " +
                this.x +
                "; y: " +
                this.y +
                "; color:"+
                this.color);
            return res;
        },
        addToList: function addToList(){
            arrListShapes.push(this);
        },
        clearShape: function clearShape(){
            var c = document.getElementById("allShapes");
            var ctx = c.getContext("2d");
            var name = this.name;
            if(name == "circle"){
                ctx.clearRect(this.x - this.radius - 1, this.y - this.radius - 1, this.radius * 2 + 2, this.radius * 2 + 2);
                return ctx;
            }

            if(name == "rect"){
                ctx.clearRect(this.x,this.y, this.width, this.height);
                return ctx;
            }
            if(name == "tri" || name == "seg"){
                //ctx.clearRect(this.x,this.y);
                alert("С триенeто на Triangle и Segment не се справих :) !");
                return ctx;
            }
//            if(name == "seg"){
//                ctx.clearRect(0,0,this.point.x, this.point.y);
//                return ctx;
//            }
        }

    }
}

function Circle(x, y, color, radius) {
    var base = Shape(x, y,color);
    base.radius= radius;
    base.name = "circle";

    var basedrawShape = base.draw();
    base.draw = function () {
        basedrawShape.beginPath();
        basedrawShape.fillStyle = base.color;
        basedrawShape.arc(base.x,base.y,base.radius,0,2*Math.PI);
        basedrawShape.fill();
        basedrawShape.closePath();
    }
    var  baseToString = base.toString;
        base.toString = function(){
        return "Circle" + baseToString.call(this) + "; radius: " + base.radius + "}";
    }

//    var baseClearShape = base.clearShape();
//    base.clearShape= function (){
//        baseClearShape.clearRect(base.x - base.radius - 1, base.y - base.radius - 1, base.radius * 2 + 2, base.radius * 2 + 2);
//    }

    return base;
}

function Rectangle(x,y,color,width,height){
    var base = Shape(x,y,color);
    base.width = width;
    base.height = height;
    base.name = "rect";

    var basedrawShape = base.draw();
    base.draw = function () {
        basedrawShape.beginPath();
        basedrawShape.fillStyle = base.color;
        basedrawShape.rect(base.x,base.y,base.width,base.height);
        basedrawShape.fill();
        basedrawShape.closePath();
    }

    var  baseToString = base.toString;
    base.toString = function(){
        return "Rectangle" + baseToString.call(this) + "; width: " + base.width+ "; height: " + base.height + "}";
    }

    return base;
}

function Point(x,y){
    return {
        x:x,
        y:y,
        toString: function toString(){
            return  "Point : { x: " +
                this.x +
                "; y: " +
                this.y + "}";
        }
    }
}

function Triangle(x,y,color,pointB,pointC){
    var base = Shape(x,y,color);
    base.pointB = pointB;
    base.pointC = pointC;
    base.name = "tri";

    var basedrawShape = base.draw();
    base.draw = function () {
        basedrawShape.beginPath();
        basedrawShape.fillStyle = base.color;
        basedrawShape.moveTo(base.x,base.y);
        basedrawShape.lineTo(base.pointB.x,base.pointB.y);
        basedrawShape.lineTo(base.pointC.x,base.pointC.y);
        basedrawShape.fill();
        basedrawShape.closePath();
    }

    var  baseToString = base.toString;
    base.toString = function(){
        return "Triangle: " + baseToString.call(this)+
            "; "+
            base.pointB.toString()+
            "; "+
            base.pointC.toString()+
            "}";
    }

    return base;
}

function Segment(x,y,color,point){
    var base = Shape(x,y,color);
    base.point= point;
    base.name = "seg";

    var basedrawShape = base.draw();
    base.draw = function () {
        basedrawShape.beginPath();
        basedrawShape.strokeStyle = base.color;
        basedrawShape.moveTo(base.x,base.y);
        basedrawShape.lineTo(base.point.x,base.point.y);
        basedrawShape.stroke();
        basedrawShape.closePath();
    }
    var  baseToString = base.toString;
    base.toString = function(){
        return "Segment" + baseToString.call(this) + "; width: " + base.point.toString()+ "}";
    }

    return base;
}

//====================================
/*
var circe = Circle(10,30,'#000',10);
console.log(circe.toString());
console.log(circe.draw());
circe.addToList();
//circe.clearShape();


var rect= Rectangle(100,30,'#D2DE66',30,50);
console.log(rect.toString());
console.log(rect.draw());
rect.addToList();

var pointB = Point(200,10);
var pointC = Point(300,110);
var tri = Triangle(100,110,"#5559CC",pointB,pointC);
console.log(tri.toString());
console.log(tri.draw());
tri.addToList();


var point = Point(120,120);
var seg = Segment(30,120,"#000",point);
console.log(seg.toString());
console.log(seg.draw());
seg.addToList();
*/
