const menu = document.querySelector("ul");
const menuItems = menu.querySelectorAll("li");
const main = document.getElementById("main");
const inputTrack = document.getElementById("input-area")
const textArea = document.getElementById("text-area");

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

let currentLetterIndex = 0;
let currentWordIndex = 0;

const wordElements = document.querySelectorAll("#text-area .word");
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
menuItems.forEach(item =>
{
    item.addEventListener("click", (event) =>
    {
        const option = item.getAttribute("data-option");
        main.innerText = option;
    })
})
const skillSetElement = document.querySelector("#skill-set");

skills.forEach(skillTitle => {
    const skill = document.createElement("div");
    skill.innerText = skillTitle;
    skillSetElement.appendChild(skill)
})


animateTytle();
