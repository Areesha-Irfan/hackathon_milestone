var Button = document.getElementById("button");
var Skills = document.getElementById("skills");
Button.addEventListener("click", function () {
    if (Skills.style.display === "none") {
        Skills.style.display = "block";
    }
    else {
        Skills.style.display = 'none';
    }
});
