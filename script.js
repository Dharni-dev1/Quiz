const questionset = document.getElementById("questionset");
let ansmark = 0;

questionset.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(questionset);

    console.log(...formData.entries());

    for (let d of formData.entries()) {
        if (d[0] === "optionq1" && d[1] === "option2") {
            ansmark++;
        } else if (d[0] === "optionq2" && d[1] === "option2") {
            ansmark++;
        } else if (d[0] === "optionq3" && d[1] === "option3") {
            ansmark++;
        } else if (d[0] === "optionq4" && d[1] === "option2") {
            ansmark++;
        }
    }

    console.log("Your score:", ansmark);
    alert("Your score:"+ ansmark);
});