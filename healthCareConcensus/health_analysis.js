const addPatientBtn = document.querySelector("#addPatient")
const report = document.querySelector("#report")
const btnSearch = document.querySelector("#btnsearch")

const patients = []

//add Patients to patients arrray
const addPatients = () => {
    const name = document.querySelector("#name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.querySelector("#age").value;
    const condition = document.querySelector("#condition").value;

    if (name && gender && age && condition) {
        patients.push({ name, gender: gender.value, age, condition })
        resetForm();
        generateReport();
        console.log(patients)
    } else {
        alert("Fill the form correctly")
    }
}

function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
        Diabetes: 0,
        Thyroid: 0,
        "High Blood Pressure": 0,
    }

    const genderConditonsCount = {
        Male: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
        Female: {
            Diabetes: 0,
            Thyroid: 0,
            "High Blood Pressure": 0,
        },
    }

    for (const patient of patients) {
        conditionsCount[patient.condition]++;
        console.log(patient.gender)
        genderConditonsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditonsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditonsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditonsCount[gender][condition]}<br>`;
        }

    }
}

const search = () => {
    const input = document.querySelector("#conditionInput").value.toLowerCase();
    const resultDiv = document.querySelector("#result")
    resultDiv.innerHTML = ""

    fetch('health_analysis.json')
        .then(response => response.json())
        .then(data => {
            const condition = data.conditions.find(item => item.name.toLowerCase() === input);


            if (condition) {
                console.log(condition)
                resultDiv.innerHTML = `
                    <h2>${condition.name}</h2>
                    <img src="images/${condition.imagesrc}"/>
                `;
            } else {
                resultDiv.innerHTML = "Results not found"
            }

        })
        .catch(error => {
            resultDiv = "Results not found"
        })
}

addPatientBtn.addEventListener("click", addPatients)
btnSearch.addEventListener("click", search)