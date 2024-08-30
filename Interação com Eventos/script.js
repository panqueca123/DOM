const botão =document.querySelector('button');
const p = document.querySelector('#zapzap');

botão.addEventListener('click', () => {
    const input = document.querySelector('input').value;

    p.innerHTML = input
})