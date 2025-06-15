function renderCombatText(combatText)
{
    const textArea = document.getElementById("text-area");

    let isFirstWord = true;
    const CombatTextWords = combatText.split(" ");
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
    })
}
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
function trackMenuOptions()
{
    const main = document.getElementById("main");
    const menu = document.querySelector("ul");
    const menuItems = menu.querySelectorAll("li");
    menuItems.forEach(item =>
    {
        item.addEventListener("click", (event) =>
        {
            const option = item.getAttribute("data-option");
            main.innerText = option;
        })
    })
}
function renderSkillSet()
{
    const skillSetElement = document.querySelector("#skill-set");
    skills.forEach(skillTitle =>
    {
        const skill = document.createElement("div");
        skill.innerText = skillTitle;
        skillSetElement.appendChild(skill)
    })
}
