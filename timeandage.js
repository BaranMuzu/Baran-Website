// ORIGINAL CODE BY: TechnikTil : https://github.com/TechnikTil
// Thank you :]

const baranTimeZone = 'Europe/Istanbul'; 
const baranBirthday = Date.UTC(2010, 3, 16);

function setBaranDate() {
    const baranTime = document.getElementById('baranTime');
    const statusImage = document.getElementById('statusImage');

    const date = new Date(Date.now());
    let milisecondsElapsed = date.getUTCMilliseconds();

    const TimeString = date.toLocaleString('en-US', { timeZone: baranTimeZone });
    const baranDate = new Date(TimeString);
    const currentHour = baranDate.getHours();

    if(baranTime != null) {
        baranTime.innerText = date.toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: baranTimeZone
        });
    }

    if (statusImage != null) {
        const okeyuhthetarget = (currentHour >= 0 && currentHour < 7) ? "images/baransleep.png" : "images/spin.gif";
        
        if (!statusImage.src.includes(okeyuhthetarget)) {
            statusImage.src = okeyuhthetarget;
        }
    }

    setTimeout(function() {
        setBaranDate();
    }, 1000 - milisecondsElapsed);
}

function setBaranAge() {
    const baranAge = document.getElementById('baranAge');
    const baranBirthdayDocument = document.getElementById('baranBirthDate');

    const birthDateObj = new Date(baranBirthday);

    if(baranBirthdayDocument != null) {
        baranBirthdayDocument.innerText = birthDateObj.toLocaleDateString('en-US', {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC"
        });
    }

    const timeSinceDate = new Date();
    timeSinceDate.setTime(Date.now() - birthDateObj.getTime());

    if(baranAge != null) {
        baranAge.innerText = (timeSinceDate.getUTCFullYear() - 1970);
    }
}

window.addEventListener('load', () => {
    setBaranDate();
    setBaranAge();
});