//polygon's points.
let polyPoint1 = [
    { x: 0, y: 1 },
    { x: 3, y: 2 },
    { x: 6, y: 1 },
    { x: 3, y: 0 }
]

//create polygon by using default style option.
var polygon1 = new svgModule('div1', null, 300, 300)
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
var polygon2 = new svgModule('div2', null, 300, 300)
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
var polygon3 = new svgModule('div3', null, 300, 300)
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

//create circle and drawing something
var circle1 = new svgModule('div4', null, 300, 300)
    .addCircle({
        r: 50,
        fill: 'red',
        stroke: 'white',
        strokeWidth: 5,
        top: 145,
        left: 155,
    })
    .init();

//create a ellipse
var ellipse1 = new svgModule('div5', null, 300, 300)
    .addEllipse({
        rx: 100,
        ry: 50,
        top: 145,
        left: 145,
        style: "fill: coral; stroke: white; stroke-width: 5;",
    })
    .init();

//create a polyline
var polyline1 = new svgModule('div6', null, 300, 300)
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

//build a icon for layer.
var example1 = new svgModule('ex1', null, 310, 200)
    .addPolygon({
        points: polyPoint1,
        zoom: 50,
        style: "fill: #cccccc; stroke: black; stroke-width: 8;"
    })
    .addPolygon({
        points: polyPoint1,
        zoom: 50,
        top: 50,
        style: "fill: #a6a6a6; stroke: black; stroke-width: 8;"
    })
    .addPolygon({
        points: polyPoint1,
        zoom: 50,
        top: 95,
        style: "fill: #8c8c8c; stroke: black; stroke-width: 8;"
    })
    .init();

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
        left: 100,
        zoom: 10,
        style: "fill: none; stroke: white; stroke-width: 15;"
    })
    .addLine({
        points: [
            { x: 0, y: 5 },
            { x: 0, y: 0 }
        ],
        top: 30,
        left: 210,
        zoom: 10,
        style: "fill: none; stroke: white; stroke-width: 15;"
    }).init();

var example3_1 = new svgModule('ex3', null, 300, 110)
    .addCircle({
        r: 100,
        top: -20,
        left: 153,
        style: "fill: none; stroke: white; stroke-width: 15;"
    })
    .init();