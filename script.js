const container = document.getElementById('container');

for (var i = 0; i < 15; i++)
{
    container.innerHTML += `<div id="pixel_${i}"></div>`;
}