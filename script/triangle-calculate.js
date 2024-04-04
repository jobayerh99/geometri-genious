function calculaTriangleArea() {
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText);
    console.log(base);

    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const equalion = 0.5 * base * height;
    console.log(equalion);

    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = equalion;
}