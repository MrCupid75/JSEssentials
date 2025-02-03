const userNameElement = document.querySelector("#name")
const userAgeElement = document.querySelector("#age")
const emailElement = document.querySelector("#email")
const jobElement = document.querySelector("#job")
const designationElement = document.querySelector("#designation")
const productTypeElement = document.querySelector("#productType")
const feedbackTextElement = document.querySelector("#feedbackText")

const submitBtn = document.querySelector("#submitBtn")

const userInfo = document.querySelector("#userInfo")

const submitFeedback = () => {
    alert("Thank you for your feedback")
    userInfo.style.display = "block";
    document.querySelector("#userName").innerHTML = userNameElement.value;
    document.querySelector("#userAge").innerHTML = userAgeElement.value;
    document.querySelector("#userEmail").innerHTML = emailElement.value;
    document.querySelector("#userJob").innerHTML = jobElement.value;
    document.querySelector("#userDesignation").innerHTML = designationElement.value;
    document.querySelector("#userProductChoice").innerHTML = productTypeElement.value;
    document.querySelector("#userFeedback").innerHTML = feedbackTextElement.value;
}

submitBtn.addEventListener("click", submitFeedback)
