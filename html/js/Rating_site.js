// JavaScript source code



function Finish_2() {
    const rating_2 = document.getElementById("rating_2").value;
    const message_2 = document.getElementById("message_2");
    const finish_2_do = document.getElementById("Confirm_2")

    if (rating_2 === "0") {
        message_2.textContent = "Choose a rating!";
        message_2.style.color = "red";
    } else {
        message_2.textContent = "Confirmed!";
        message_2.style.color = "green";
        finish_2_do.style.display = "none";
    }
}