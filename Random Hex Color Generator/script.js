const colorCode = document.getElementById('color-code');
const colorGenerateButton = document.getElementById('color-generate-button');
const tempCode = [];
const hexCode = "#"+tempCode.join("");
colorGenerateButton.addEventListener('click', function(){
    const hexLetters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    for(let i = 0; i < 6; i++){
        let randomValue = Math.floor(Math.random() * hexLetters.length);
        tempCode.push(hexLetters[randomValue]);
    };

});
console.log("#"+ tempCode.join(""));