document.getElementById('colorInput').addEventListener('input', function(event) {
    const color = event.target.value;
    document.getElementById('colorBox').style.backgroundColor = color;
    document.getElementById('hexValue').textContent = color;

    const rgb = hexToRgb(color);

    document.getElementById('rgbValue').textContent = `${rgb.r}, ${rgb.g}, ${rgb.b}`;
});
function hexToRgb(hex) {
    let r = 0, g = 0, b = 0;
    if (hex.length == 7) {
        r = parseInt(hex.slice(1, 3), 16);
        g = parseInt(hex.slice(3, 5), 16);
        b = parseInt(hex.slice(5, 7), 16);
    }
    return { r, g, b };
}
