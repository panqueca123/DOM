document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.querySelector('.box1');
    const box2 = document.querySelector('.box2');
    const box3 = document.querySelector('.box3');
    const changeColorsButton = document.getElementById('changeColorsButton');

    function changeColors() {
        box2.classList.remove('box2');
        box2.classList.add('newColor1');

        box1.classList.remove('box1');
        box1.classList.add('newColor2');

        if (box3.classList.contains('box3')) {
            box3.classList.remove('box3');
            box3.classList.add('newColor3');
        } else {
            box3.classList.remove('newColor3');
            box3.classList.add('box3');
        }
    }

    changeColorsButton.addEventListener('click', changeColors);
});
