function calcFigureArea(w, h, W, H) {
    let allArea = w * h + W * H;
    let commonArea = Math.min(w, W) * Math.min(h, H);
    let area = allArea - commonArea;

    return area;
}