document.addEventListener('DOMContentLoaded', isDOMContentLoaded);

function isDOMContentLoaded() {
    const colors = ['red', 'green', 'yellow'];

    const randomColor = chooseRandomColor(colors);

    displayRandomColor(randomColor);

    const productsList = document.querySelector('.productsList');

    productsList.addEventListener('click', e => {
        const product = e.target.innerText;

        isProductCorrect(randomColor, product)
            ? alert('Hurray!')
            : alert('Wrong answer');
    });
}

function chooseRandomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function displayRandomColor(randomColor) {
    const colorEl = document.querySelector('.color');
    colorEl.innerText = randomColor;
    colorEl.style.color = randomColor;
}

function isProductCorrect(color, product) {
    const products = {
        red: ['cranberry', 'cherry'],
        yellow: ['banana', 'melon'],
        green: ['cucumber', 'avocado'],
    };

    return products[color].includes(product);
}
