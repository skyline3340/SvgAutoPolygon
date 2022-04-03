class svgModule {
    //divId: div element's id
    //svgId: svg enement's id
    //width: value for setting svg enement's width
    //height: value for setting svg enement's height
    constructor(divId, svgId, width, height) {
        this.divObj = document.getElementById(divId)
        this.svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        (svgId != null) ? this.svgObj.setAttribute('id', svgId) : null;
        (width != null) ? this.svgObj.setAttribute('width', `${width}`) : null;
        (height != null) ? this.svgObj.setAttribute('height', `${height}`) : null;
    }

    //opt{id?, points, zoom?, fill?, stroke?, strokeWidth?, style?, top?, left?}
    //id: polygon object's id (default = null)
    //points: polygon object's points by using [{x: value, y: value},......]
    //zoom: value for zoom (can use both int and string, default = 1)
    //fill: color for fill (style, default = 'white')
    //stroke: color for stroke (style, default = 'black')
    //strokeWidth: value for stroke-width (style, can use both int and string, default = 1)
    //style: edit element's style by string (can just use this to edit style)
    //top: value for shift polygon (can be used when stroke has been cutted, default = stroke-width)
    //left: value for shift polygon (can be used when stroke has been cutted, default = stroke-width)
    //* when style has been setted, it will overwrite every style's setting before, even with default value.
    addPolygon(opt) {
        opt.strokeWidth = opt.strokeWidth ?? 1;
        opt.stroke = opt.stroke ?? 'black';
        opt.fill = opt.fill ?? 'white';
        opt.zoom = opt.zoom ?? 1;
        
        this.obj = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        (opt.id != null) ? this.obj.setAttribute('id', opt.id) : null;
        this.obj.style['stroke-width'] = `${opt.strokeWidth}`;
        this.obj.style['stroke'] = opt.stroke;
        this.obj.style['fill'] = opt.fill;
        (opt.style != null) ? this.obj.style = opt.style : null;

        opt.top = opt.top ?? parseInt(this.obj.style['stroke-width']);
        opt.left = opt.left ?? parseInt(this.obj.style['stroke-width']);
    
        var xMin = opt.points.map(p => p.x).sort(function (a, b) { return a - b })[0];
        var yMax = opt.points.map(p => p.y).sort(function (a, b) { return b - a })[0];

        var svgPoints = "";
        for (var i = 0; i < opt.points.length; i++) {
            var x = (opt.points[i].x - xMin) * opt.zoom;
            var y = (opt.points[i].y - yMax) * opt.zoom;
            svgPoints += `${(x >= 0) ? x + opt.left : x * -1 + opt.left},${(y >= 0) ? y + opt.top : y * -1 + opt.top} `;
        }
       
        this.obj.setAttribute('points', svgPoints);

        this.svgObj.appendChild(this.obj);

        return this;
    }

    //initialize svgModule to target svg element
    init() {
        this.divObj.appendChild(this.svgObj);
        return this;
    }
}