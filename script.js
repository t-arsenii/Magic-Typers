const menu = document.querySelector("ul");
const menuItems = menu.querySelectorAll("li");
const main = document.getElementById("main");
const inputTrack = document.getElementById("input-area")
const textArea = document.getElementById("text-area");


const combatText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales nibh nunc, convallis imperdiet libero malesuada et. Sed semper turpis ligula, vitae ultricies neque dapibus vel. Integer sit amet tincidunt mauris. Suspendisse accumsan gravida massa non pellentesque. Cras ut urna risus. Suspendisse enim diam, tristique vel tristique non, dictum sit amet libero. Sed sit amet mollis neque. Donec vel mi auctor, varius nisl in, sagittis nulla. Cras porta congue fringilla. Etiam facilisis massa lorem, ut vestibulum urna porttitor in. In consectetur tellus ac consectetur luctus. Donec ultricies malesuada nunc, sit amet varius urna molestie eget. Quisque accumsan lacus nulla, a ornare nunc iaculis quis. Cras vitae urna quis nisi rutrum accumsan. ";

const CombatTextWords = combatText.split(" ");
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

const inputText = [];
let index = -1;

const activeWordElement = document.querySelector("#text-area .word.active");
const letterElements = activeWordElement.querySelectorAll("letter");
const currentLetter = letterElements.forEach

inputTrack.addEventListener("keydown", (event) =>
{
    if (/^[a-zA-Z]$/.test(event.key) || /^[.,!?;:'"-]$/.test(event.key) || event.key === "\u0020")
    {
        inputText.push(event.key);
        index++;
    }
    else if
        (event.key == "Backspace")
    {
        if (inputText.length > 0)
        {
            inputText.pop();
            index--;
        }
    }
    else
    {
        return;
    }

    if (isCorrectInput(combatText, inputText, index))
    {
        document.querySelector("#text-area").className = "correct";
        console.log("correct");
        return;
    }
    if (index <= -1)
    {
        document.querySelector("#text-area").className = "";
    } else
    {
        document.querySelector("#text-area").className = "incorrect";
    }

    console.log(index);
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
animateTytle();