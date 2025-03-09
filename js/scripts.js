let sloganIndex = 0;
showSlogans();

function showSlogans() {
    let i;
    let slogans = document.getElementsByClassName("slogans");
    for (i = 0; i < slogans.length; i++) {
        slogans[i].style.display = "none";
    }
    sloganIndex++;
    if (sloganIndex > slogans.length) {sloganIndex = 1}
    slogans[sloganIndex-1].style.display = "block";
    setTimeout(showSlogans, 10000); // Change image every 10 seconds
}