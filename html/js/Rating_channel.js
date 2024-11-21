// JavaScript source code


function Finish_1() {
    const rating_1 = document.getElementById("rating_1").value;
    const message_1 = document.getElementById("message_1");
    const finish_1_do = document.getElementById("Confirm_1")

    if (rating_1 === "0") {
        message_1.textContent = "Choose a rating!";
        message_1.style.color = "red";
    } else {
        message_1.textContent = "Confirmed!";
        message_1.style.color = "green";
        finish_1_do.style.display = "none";
    }
}