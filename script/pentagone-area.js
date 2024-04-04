function calculatePentagoneArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    console.log(perimeter);

    const apothem = getInputValueById('pentagone-apothem');
    console.log(apothem);

    const area = 0.5 * perimeter * apothem;

    setInnerTextById('pentagone-area', area);
}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}