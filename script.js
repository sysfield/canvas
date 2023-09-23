const container = document.getElementById('container');

const sizeSlider = document.getElementById('sizeSlider');

var mouseDown = 0;
document.getElementById('container').onmousedown = function() {
    ++mouseDown;
    console.log(mouseDown);
}

document.getElementById('container').onmouseup = function() {
    --mouseDown;
    console.log(mouseDown);
}

// console.log(sizeSlider.valueAsNumber);

sizeSlider.addEventListener('mouseup', canvasSize(sizeSlider.valueAsNumber))

// canvasSize(sizeSlider.valueAsNumber)

function parseNumber(number)
{
    switch (number)
    {
        case 0:
            return 16;
        case 33:
            return 32;
        case 66:
            return 64;
        case 99:
            return 128;
    }
}

function canvasSize(size)
{

    size = parseNumber(size);

    for (var i = 0; i < size; i++)
    {
        let pixelID = `pixel_${i}`;
        container.innerHTML += `<div class="pixel" onmouseover="colourPixel(${pixelID})" id="${pixelID}"></div>`;
    }
}

function colourPixel(pixelID)
{
    if (mouseDown)
    {
        pixelID.style.backgroundColor = 'rebeccapurple';
    }
}