const menu = document.querySelector("ul");
const menuItems = menu.querySelectorAll("li");
const main = document.getElementById("main");
const inputTrack = document.getElementById("input-area")
const textArea = document.getElementById("text-area");


const combatText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales nibh nunc, convallis imperdiet libero malesuada et. Sed semper turpis ligula, vitae ultricies neque dapibus vel. Integer sit amet tincidunt mauris. Suspendisse accumsan gravida massa non pellentesque. Cras ut urna risus. Suspendisse enim diam, tristique vel tristique non, dictum sit amet libero. Sed sit amet mollis neque. Donec vel mi auctor, varius nisl in, sagittis nulla. Cras porta congue fringilla. Etiam facilisis massa lorem, ut vestibulum urna porttitor in. In consectetur tellus ac consectetur luctus. Donec ultricies malesuada nunc, sit amet varius urna molestie eget. Quisque accumsan lacus nulla, a ornare nunc iaculis quis. Cras vitae urna quis nisi rutrum accumsan. ";

const CombatTextWords = combatText.split(" ");
const CombatTextLetters = combatText.split("");

let isFirstWord = true;
CombatTextWords.forEach((wordText) =>
{
    const wordElement = document.createElement("div")
    wordElement.classList.add("word");
    if (isFirstWord)
    {
        wordElement.classList.add("active");
        isFirstWord = false;
    }

    const chars = wordText.split("");

    chars.forEach((charText) =>
    {
        const letterElement = document.createElement("letter");
        letterElement.innerText = charText;
        wordElement.appendChild(letterElement);
    })
    textArea.appendChild(wordElement);

    console.log(wordText);
})


const wordElements = document.querySelectorAll("#text-area .word");

let currentLetterIndex = 0;
let currentWordIndex = 0;

document.addEventListener("keydown", (event) =>
{
    const activeWordElement = document.querySelector("#text-area .word.active");
    const letterElements = activeWordElement.querySelectorAll("letter");

    if (!(/^[a-zA-Z]$/.test(event.key) || /^[.,!?;:'"-]$/.test(event.key) || event.key === "\u0020" || event.key === "Backspace"))
    {
        console.log("Wrong input");
        return true;
    }

    if (event.key == "Backspace")
    {
        console.log("backpase hit");
        if (currentLetterIndex > 0)
        {
            currentLetterIndex--;
            letterElements[currentLetterIndex].classList.remove("correct", "incorrect");
        }
        return;
    }

    if (currentLetterIndex === letterElements.length && event.key === "\u0020")
    {
        currentLetterIndex = 0;
        activeWordElement.classList.remove("active");
        currentWordIndex++;
        wordElements[currentWordIndex].classList.add("active");
        return;
    }

    const isCorrect = event.key === letterElements[currentLetterIndex].innerText;
    currentLetterIndex++;
    highlightLetter(currentLetterIndex - 1, isCorrect, letterElements);
})

function isCorrectInput(originalText, currentText, index)
{
    if (index < 0)
    {
        return false;
    }
    if (index > originalText.length)
    {
        return false;
    }
    if (originalText[index] === currentText[index])
    {
        return true;
    }
    return false;
}
menuItems.forEach(item =>
{
    item.addEventListener("click", (event) =>
    {
        const option = item.getAttribute("data-option");
        main.innerText = option;
    })
})
function highlightLetter(index, isCorrect, letterElements)
{
    if (!letterElements[index]) return;
    letterElements[index].classList.remove("correct", "incorrect");
    if (isCorrect)
    {
        letterElements[index].classList.add("correct");
        return;
    }
    letterElements[index].classList.add("incorrect");
}

animateTytle();
