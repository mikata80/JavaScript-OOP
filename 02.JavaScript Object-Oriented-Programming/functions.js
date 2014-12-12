/**
 * Created by Lenovo on 07.11.2014.
 */
function adjust() {
    var value = document.getElementById("shape").value;
    console.log(value);
    if(value == "circle") {
        document.getElementById('divRadius').style.display = 'block';
    } else{
        document.getElementById('divRadius').style.display = 'none';
    }
    if(value == "rect") {
        document.getElementById('divRect').style.display = 'block';
    } else{
        document.getElementById('divRect').style.display = 'none';
    }
    if(value == "tri") {
        document.getElementById('divX2').style.display = 'block';
        document.getElementById('divX3').style.display = 'block';
    } else{
        document.getElementById('divX2').style.display = 'none';
        document.getElementById('divX3').style.display = 'none';
    }
    if(value == "seg") {
        document.getElementById('divX2').style.display = 'block';
    }
}

function fillDraw(){
    var value = document.getElementById("shape").value;
    var res ="";
    var x = document.getElementById("toX").value;
    var y = document.getElementById("toY").value;
    var color = document.getElementById("color").value;

    var r = document.getElementById("radius").value;
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
    var x2 = document.getElementById("toX2").value;
    var y2 = document.getElementById("toY2").value;
    var x3 = document.getElementById("toX3").value;
    var y3 = document.getElementById("toY3").value;

    if(value == "circle") {
        var circle = Circle(x,y,color,r);
        circle.addToList();
        res = circle.toString();
        console.log(circle.draw());
    }
    if(value == "rect") {
        var rect = Rectangle(x,y,color,w,h);
        rect.addToList();
        res = rect.toString();
        console.log(rect.draw());

    }
    if(value == "tri") {
        var pointB = Point(x2,y2);
        var pointC = Point(x3,y3);
        var tri = Triangle(x,y,color,pointB,pointC);
        tri.addToList();
        res = tri.toString();
        console.log(tri.draw());
    }
    if(value == "seg") {
        var point = Point(x2,y2);
        var seg = Segment(x,y,color,point);
        seg.addToList();
        res = seg.toString();
        console.log(seg.draw());
    }

    document.getElementById("txtArea").value += res + "\n";
}

function delFromTextArea(){
    var arr = document.getElementById("txtArea").value.split("\n");
    var idx = arrListShapes.length - 1;
    if (idx > -1){
        var obj = arrListShapes[idx];
        obj.clearShape();
        console.log("obj: " + obj.toString());
        arrListShapes.splice(idx, 1);
        arr.splice(idx, 1);
        document.getElementById("txtArea").value = null;
        for(i= 0; i<=arr.length-1;i++){
            if(arr[i] != "") {
                document.getElementById("txtArea").value += arr[i] + "\n";
            }
        }
    }
}