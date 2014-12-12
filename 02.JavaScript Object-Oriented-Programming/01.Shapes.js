    Object.prototype.extend = function (properties) {
        function f() { } ;
        f.prototype = Object.create(this);
        for (var prop in properties) {
            f.prototype[prop] = properties[prop];
        }
        f.prototype._super = this;
        return new f();
    }

// var allShapes  = (function allShapes (){

   var arrListShapes = [];

    var Shape = {

        init: function init(x, y, color) {
            this._x = x;
            this._y = y;
            this._color = color;
            //return this;
        },
        draw: function draw() {
            var c = document.getElementById("allShapes");
            var ctx = c.getContext("2d");
            return ctx;
        },
        toString: function toString() {
            var res = (
                ": { x: " +
                this._x +
                "; y: " +
                this._y +
                "; color:"+
                this._color);
            return res;
        },
        getX: function getX(){
            return this._x;
        },
        getY: function getY(){
            return this._y;
        }
        ,
//        listShapes: function listShapes(obj){
//            arrListShapes.push(obj);
//        },
        clear: function clearCanvas(){
            var drawShape = this.draw();
            drawShape.clear(true);
        }
    }

    var Circle = Shape.extend({
        init: function init(x,y,color,radius){

            this._super.init(x,y,color);
//            this._x = x;
//            this._y = y;
//            this._color = color;
            this._radius = radius;
            return this;
        },
        draw: function draw(){
            var drawShape = this._super.draw();
            drawShape.beginPath();
            drawShape.fillStyle = this._color;
            drawShape.arc(this._x,this._y,this._radius,0,2*Math.PI);
            drawShape.closePath();
            drawShape.fill();
        },
        toString: function toString() {
            return "Circle" + this._super.toString(this) + "; radius: " + this._radius + "}";
        },
        listShapes: function listShapes(){
           // this._super.listShapes(this);
            arrListShapes.push(this);
        },
        clear: function clearCanvas(){
            var drawShape = this._super.draw();
            drawShape.clearRect(this._x - this._radius - 1, this._y - this._radius - 1, this._radius * 2 + 2, this._radius * 2 + 2);
            drawShape.closePath();
        }

    })

    var Rectangle = Shape.extend({
        init: function init(x,y,color,width,height){
            this._super.init(x,y,color);
            this._width = width;
            this._height = height;
            return this;
        },

           draw: function draw(){

            var drawShape = this._super.draw();
            drawShape.beginPath();
            drawShape.fillStyle = this._color;
            drawShape.fillRect(this._x,this._y,this._width,this._height);
            drawShape.closePath();
        },
        toString: function toString() {
            return "Rectangle" +
                this._super.toString(this) +
                "; width: " + this._width +
                "; height: " + this._height+
                "}";
        },
        listShapes: function listShapes(){
            //this._super.listShapes(this);
            arrListShapes.push(this);
        },
        clear: function clearCanvas(){
            var drawShape = this._super.draw();
            drawShape.clearRect(this._x,this._y, this._width, this._height);
            drawShape.closePath();
        }

    })

    var Point = {
        init: function init(x, y) {
            this._x = x;
            this._y = y;
            return this;
        },
        toString: function toString() {
            return "Point " +
                ": { x: " +
                this._x +
                "; y: " +
                this._y +
                "}"
        }
    }

    var Triangle = Shape.extend({
        init: function init(x,y,color,pointB,pointC){
            this._super.init(x,y,color);
            this._pointB = pointB;
            this._pointC = pointC;


            return this;
        },
        draw: function draw(){
            var drawShape = this._super.draw();
            drawShape.beginPath();
            drawShape.fillStyle = this._color;
            drawShape.moveTo(this._x,this._y);
            drawShape.lineTo(this._pointB._x,this._pointB._y);
            drawShape.lineTo(this._pointC._x,this._pointC._y);
            drawShape.closePath();
            drawShape.fill();
        },
        toString: function toString(){
            return "Triangle: " +
                this._super.toString() +
                "; "+
                this._pointB.toString()+
                "; "+
                this._pointC.toString()+
                "}";
        },
        listShapes: function listShapes(){
            //this._super.listShapes(this);
            arrListShapes.push(this);
        },
        clear: function clearCanvas(){
            var drawShape = this._super.draw();
            drawShape.clearRect(this._x,this._y, 0,0);
            drawShape.closePath();
        }

    })

    var Segment = Shape.extend({
        init: function init(x,y,color,point){
            this._super.init(x,y,color);
            //this._radius = radius;
            this._point = point;
            return this;
        },
        draw: function draw(){
            var drawShape = this._super.draw();
            drawShape.beginPath();
            drawShape.strokeStyle = this._color;
            drawShape.moveTo(this._x,this._y);
            //drawShape.arc(this._x,this._y,this._radius,0,2*Math.PI);
            drawShape.lineTo(this._point._x,this._point._y);
            drawShape.closePath();
            drawShape.stroke();
        },
        toString: function toString(){
            return "Segment: " +
                this._super.toString() +
                "; "+
                this._point.toString()+
               "}";
        },
        listShapes: function listShapes(){
            //this._super.listShapes(this);
            arrListShapes.push(this);
        },
        clear: function clearCanvas(){
            var drawShape = this._super.draw();
            drawShape.clearRect(0, 0, this._point._x, this._point._y);
            drawShape.closePath();
        }

    })
 //}())

    var circle = Object.create(Circle).init(300,40,'#4374BF',30);
    circle.listShapes(circle);
    //console.log(circle.draw());
    console.log(circle.toString());

    var circle1 = Object.create(Circle).init(50,20,'#1374BF',10);
    //console.log(circle.draw());
    circle1.listShapes(circle1);
    console.log(circle1.toString());
//
//    var rect = Object.create(Rectangle).init(30,70,'#1274AA',50,30);
//    console.log(rect.draw());
//    console.log(rect.toString());
//
//    var pointB = Object.create(Point).init(200,10);
//    var pointC = Object.create(Point).init(300,110);
//    var tri = Object.create(Triangle).init(100,110,"#5559CC",pointB,pointC);
//    console.log(tri.draw());
//    console.log(tri.toString());
//
//    var point = Object.create(Point).init(120,120);
//    var seg = Object.create(Segment).init(30,120,"#1224CB",point);
//    console.log(seg.draw());
//    console.log(seg.toString());





