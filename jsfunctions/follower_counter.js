const countDisplay = document.querySelector("#countDisplay")

let count = 0;

const increaseCount = () => {
    count++;
    countDisplay.innerHTML = count;
    checkCountValue()
}

const checkCountValue = () => {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!")
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!")
    }
}

document.querySelector("#reset").addEventListener("click", () => {
    count = 0;
    countDisplay.innerHTML = count;
    alert("Followers has been reset")
})