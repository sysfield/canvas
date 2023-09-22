const container = document.getElementById('container');

const sizeSlider = document.getElementById('sizeSlider');

console.log(sizeSlider.valueAsNumber);

function canvasSize(size)
{
    for (var i = 0; i < size; i++)
    {
        container.innerHTML += `<div class="pixel" id="pixel_${i}"></div>`;
    }
}