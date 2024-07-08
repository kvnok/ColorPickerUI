document.addEventListener('DOMContentLoaded', function() {
    const colorInput = document.getElementById('colorInput');
    const hexValue = document.getElementById('hexValue');
    const rgbValue = document.getElementById('rgbValue');
    const body = document.body;
    const textColorElements = [hexValue, rgbValue]; // Elements to change text color

    colorInput.addEventListener('input', function() {
        const color = colorInput.value;
        body.style.backgroundColor = color;
        hexValue.textContent = color;
        const rgb = hexToRgb(color);
        rgbValue.textContent = rgb.join(', ');

        // Determine and set the appropriate text color based on background luminance
        const textColor = getContrastYIQ(color);
        textColorElements.forEach(el => el.style.color = textColor);
    });

    function hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 4) {
            r = parseInt(hex[1] + hex[1], 16);
            g = parseInt(hex[2] + hex[2], 16);
            b = parseInt(hex[3] + hex[3], 16);
        } else if (hex.length === 7) {
            r = parseInt(hex[1] + hex[2], 16);
            g = parseInt(hex[3] + hex[4], 16);
            b = parseInt(hex[5] + hex[6], 16);
        }
        return [r, g, b];
    }

    function getContrastYIQ(hexColor) {
        const rgb = hexToRgb(hexColor);
        const yiq = ((rgb[0]*299) + (rgb[1]*587) + (rgb[2]*114)) / 1000;
        return (yiq >= 128) ? 'black' : 'white'; // Threshold of 128 for deciding text color
    }
});