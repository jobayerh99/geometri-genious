function calculateRectanglrArea(){
    const weidthInput = document.getElementById('rectangle-width');
    const widthText = weidthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    const area = width * length;
    console.log(area);

    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}