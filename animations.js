function animateTytle()
{
    const dotsElement = document.querySelector("#dots");
    let counter = 0;
    setInterval(() =>
    {
        dotsElement.innerText = ".".repeat(counter);
        if (counter > 3)
        {
            counter = 0;
            dotsElement.innerText = "";
        }
        counter++;
    }, 500)
}