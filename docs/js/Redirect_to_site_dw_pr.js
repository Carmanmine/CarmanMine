// JavaScript source code



function redirectToSite_download() {
    document.getElementById("working").style.display = "";
    document.getElementById("working").style.color = "green";
    setTimeout(() => {
        document.getElementById("working").style.display = "none";
    }, 6000);
    window.location.href = "https://drive.google.com/uc?export=download&id=1RmRwcOfnfBsuc6MQJkucVHL84oXRU1-j";
}