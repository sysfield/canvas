const container = document.getElementById('container');

const sizeSlider = document.getElementById('sizeSlider');

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
        container.innerHTML += `<div class="pixel" id="pixel_${i}"></div>`;
    }
}