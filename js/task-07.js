// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const inputRange = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) =>
  (textRef.style.fontSize = `${currentTarget.value}px`);

inputRange.addEventListener("input", fontSizeControl);