//polygon's points.
let polyPoint1 = [
    { x: 0, y: 1 },
    { x: 3, y: 2 },
    { x: 6, y: 1 },
    { x: 3, y: 0 }
]

//create polygon by using default style option.
var polygon1 = new svgModule('pg1', null, 300, 300)
    .addPolygon({
        id: 'polygon1',
        points: [
            { x: 80.19, y: -25.774 },
            { x: 66.118, y: -18.466 },
            { x: 50.757, y: -40.321 },
        ],
        zoom: 8.5,
        top: 50,
        left: 25,
        fill: 'aqua',
        stroke: 'white',
        strokeWidth: 5,
    })
    .init();

//create polygon by using style value.
var polygon2 = new svgModule('pg2', null, 300, 300)
    .addPolygon({
        id: 'polygon2',
        points: [
            { x: 80.19, y: -25.774 },
            { x: 66.118, y: 18.466 },
            { x: 50.757, y: -40.321 },
        ],
        style: "fill: red; stroke: white; stroke-width: 5;"
    })
    .init();

polygon2.setZoom(4.5).setLeft(85).setTop(20);

//create multi polygon by using shift option.
var polygon3 = new svgModule('pg3', null, 300, 300)
    .addPolygon({
        points: [
            { x: 0, y: 5 },
            { x: 2.5, y: 0 },
            { x: 5, y: 5 }
        ],
        zoom: 40,
        left: 60,
        top: 75,
        style: "fill: none; stroke: white; stroke-width: 5;"
    })
    .addPolygon({
        points: [
            { x: 0, y: 0 },
            { x: 2.5, y: 5 },
            { x: 5, y: 0 }
        ],
        zoom: 40,
        top: 25,
        left: 60,
        style: "fill: none; stroke: white; stroke-width: 5;"
    })
    .init();

//build a tree by using polygons
var polygon4 = new svgModule('pg4', null, 300, 300)
    .addPolygon({
        points: [
            { x: 0, y: 0 },
            { x: 1.5, y: 2 },
            { x: 3, y: 0 }
        ],
        zoom: 40,
        strokeWidth: 0,
        quantity: 3,
    })
    .addPolygon({
        points: [
            { x: 0, y: 0 },
            { x: 0.7, y: 0 },
            { x: 0.7, y: 2 },
            { x: 0, y: 2 },
        ],
        zoom: 40,
        left: 135,
        top: 170,
        style: "fill: #663300; stroke-width: 0;",
    })
    .init();

var a = 40;
polygon4.get(0).setZoom(0.8).setTop(a).setLeft(100).setFill("#00cc44");
polygon4.get(1).setTop(a + 35).setLeft(88).setFill("#009933");
polygon4.get(2).setZoom(1.2).setTop(a + 70).setLeft(77).setFill("#006622");

//create circle and drawing something
var circle1 = new svgModule('c1', null, 300, 300)
    .addCircle({
        r: 50,
        fill: 'red',
        stroke: 'white',
        strokeWidth: 5,
        top: 145,
        left: 155,
    })
    .init();

//create olympic logo
var circle2 = new svgModule('c2', null, 300, 300)
    .addCircle({
        r: 40,
        fill: 'none',
        stroke: 'white',
        strokeWidth: 5,
        quantity: 5
    })
    .addText({
        text: 'OLYMPIC',
        fontFamily: 'sans-serif',
        fontSize: '2em',
        fill: 'white',
        top: 260,
        left: 80
    })
    .init();
circle2.get(0).setTop(130).setLeft(60);
circle2.get(1).setTop(130).setLeft(150);
circle2.get(2).setTop(130).setLeft(240);
circle2.get(3).setTop(180).setLeft(195);
circle2.get(4).setTop(180).setLeft(105);

//create a ellipse
var ellipse1 = new svgModule('e1', null, 300, 300)
    .addEllipse({
        rx: 100,
        ry: 50,
        top: 145,
        left: 145,
        style: "fill: coral; stroke: white; stroke-width: 5;",
    })
    .init();

//build some ellipse
var ellipse2 = new svgModule('e2', null, 300, 300)
    .addEllipse({
        rx: 30,
        ry: 120,
        quantity: 2,
    })
    .addCircle({
        r: 10,
        style: "fill: white; stroke-width: 0;",
        quantity: 3,
    })
    .addEllipse({
        rx: 30,
        ry: 120,
        top: 145,
        left: 150,
        style: "fill: none; stroke: white; stroke-width: 5;"
    })
    .addCircle({
        r: 20,
        top: 148,
        left: 150,
        style: "fill: white; stroke-width: 0;"
    })
    .init();

ellipse2.get(0).setTop(-18).setLeft(210).setStyle("fill: none; stroke: white; stroke-width: 5; transform: rotate(50deg);");
ellipse2.get(1).setTop(210).setLeft(-18).setStyle("fill: none; stroke: white; stroke-width: 5; transform: rotate(-50deg);");
ellipse2.get(2).setTop(80).setLeft(100);
ellipse2.get(3).setTop(218).setLeft(100);
ellipse2.get(4).setTop(190).setLeft(230);

//create a polyline
var polyline1 = new svgModule('pl1', null, 300, 300)
    .addLine({
        points: [
            { x: 0, y: 0 },
            { x: 10, y: 10 },
        ],
        zoom: 20,
        top: 50,
        left: 50,
        style: "fill: none; stroke: white; stroke-width: 5;"
    })
    .init();

//
var polyline2 = new svgModule('pl2', null, 300, 300)
    .addLine({
        points: [
            { x: 0, y: 40 },
            { x: 40, y: 40 },
            { x: 40, y: 80 },
            { x: 80, y: 80 },
            { x: 80, y: 120 },
            { x: 120, y: 120 },
            { x: 120, y: 160 }
        ],
        zoom: 2,
        top: 20,
        left: 25,
        style: "fill: none; stroke: white; stroke-width: 5;",
    })
    .init();

//build a icon for layer.
var example1 = new svgModule('ex1', null, 310, 200)
    .addPolygon({
        points: polyPoint1,
        zoom: 30,
        left: 65,
        quantity: 3,
        stroke: 'black',
        strokeWidth: 8
    })
    .init();

example1.get(0).setTop(50).setFill('#cccccc');
example1.get(1).setTop(75).setFill('#a6a6a6');
example1.get(2).setTop(100).setFill('#8c8c8c');

//build a icon for power button.
var example2 = new svgModule('ex2', null, 300, 200)
    .addPolygon({
        points: [
            { x: 0, y: 0 },
            { x: 0, y: 15 },
            { x: 5, y: 15 },
            { x: 5, y: 0 },
        ],
        zoom: 5,
        top: 35,
        left: 141,
        style: "fill: white; stroke: black; stroke-width: 8;",
    })
    .addCircle({
        r: 50,
        top: 113,
        left: 153,
        style: "fill: black; stroke: white; stroke-width: 10;"
    })
    .init();

//build a smile icon
var example3 = new svgModule('ex3', null, 300, 110)
    .addLine({
        points: [
            { x: 0, y: 0 },
            { x: 0, y: 5 }
        ],
        top: 30,
        zoom: 10,
        style: "fill: none; stroke: white; stroke-width: 15;",
        quantity: 2
    })
    .init();

example3.get(0).setLeft(100);
example3.get(1).setLeft(210);

var example3_1 = new svgModule('ex3', null, 300, 110)
    .addCircle({
        r: 100,
        top: -20,
        left: 153,
        style: "fill: none; stroke: white; stroke-width: 15;"
    })
    .init();