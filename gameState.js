const InputModes = {
     skillSelect: "skillSelect",
     combat: "combat"
}

const screenOptions = {
     mainMenu: "mainMenu",
     defaultScreenOption: "mainMenu",
     combat: "combat"
}

const gameState = {
     currentScreen: screenOptions.defaultScreenOption,
     setScreen: function (screen)
     {
          const validScreenOption = Object.values(screenOptions).includes(screen);
          if (!validScreenOption)
          {
               console.error("Invalid screen option");
               return;
          }
          this.currentScreen = screen;

          if (this.currentScreen === screenOptions.combat)
          {
               this.addKeydownEvenListener(Trackers.combatTracker);
               return;
          }

          if (this.currentScreen === screenOptions.mainMenu)
          {
               this.addKeydownEvenListener(Trackers.mainMenuTracker);
               return;
          }


     },
     addKeydownEvenListener: function (handler)
     {
          document.addEventListener("keydown", handler);
     }
}

const Trackers = {
     combatTracker: function ()
     {
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
     },
     mainMenuTracker: function ()
     {
          console.log("Not implemented, main menu tracker");
     }
}