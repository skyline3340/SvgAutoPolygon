class svgModule {
    constructor(divId, svgId, width, height) {
        this.divObj = document.getElementById(divId)
        this.svgObj = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        (svgId != null) ? this.svgObj.setAttribute('id', svgId) : null;
        (width != null) ? this.svgObj.setAttribute('width', `${width}`) : null;
        (height != null) ? this.svgObj.setAttribute('height', `${height}`) : null;
    }

    //opt{id?, points, zoom?, fill?, stroke?, strokeWidth?}
    addPolygon(opt) {
        opt.strokeWidth = opt.strokeWidth ?? 1;
        opt.stroke = opt.stroke ?? 'black';
        opt.fill = opt.fill ?? 'white';
        opt.zoom = opt.zoom ?? 1;

        var xMin = opt.points.map(p => p.x).sort(function (a, b) { return a - b })[0];
        var yMax = opt.points.map(p => p.y).sort(function (a, b) { return b - a })[0];

        var svgPoints = "";
        for (var i = 0; i < opt.points.length; i++) {
            var x = (opt.points[i].x - xMin) * opt.zoom;
            var y = (opt.points[i].y - yMax) * opt.zoom;
            svgPoints += `${(x >= 0) ? x : x * -1},${(y >= 0) ? y : y * -1} `;
        }

        this.obj = document.createElementNS("http://www.w3.org/2000/svg", 'polygon');
        this.obj.setAttribute('points', svgPoints);
        (opt.id != null) ? this.obj.setAttribute('id', opt.id) : null;
        this.obj.style['stroke-width'] = `${opt.strokeWidth}`;
        this.obj.style['stroke'] = opt.stroke;
        this.obj.style['fill'] = opt.fill;

        this.svgObj.appendChild(this.obj);

        return this;
    }

    init() {
        this.divObj.appendChild(this.svgObj);
        return this;
    }
}