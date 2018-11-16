function shy() {
    document.getElementById("love").style.opacity = "0.5";
    document.getElementById("pissed").style.opacity = "0.5";
    document.getElementById("happy").style.opacity = "0.5";
    document.getElementById("ohno").style.opacity = "0.5";

    document.getElementById("shy").style.opacity = "1";
    document.getElementById("feedback").innerHTML = "חרטטן, מה אתה משחק אותה ביישן?<br/>אתה מת על זה, מת! רק מחכה למתנה, תודה באמת.<br/>אז יאללה תתעורר, כי אם לא... אני יודעת איפה אתה מתגורר....<img width='27' height='25' src='images/stickers-muraux-smiling-face-with-horns.png' />";
}

function love() {
    document.getElementById("shy").style.opacity = "0.5";
    document.getElementById("pissed").style.opacity = "0.5";
    document.getElementById("happy").style.opacity = "0.5";
    document.getElementById("ohno").style.opacity = "0.5";

    document.getElementById("love").style.opacity = "1";
    document.getElementById("feedback").innerHTML = "הו מאמי... אתה כזה מתוק...<br/>עכשיו תפסיק לחפור ותשתוק. <img width='25' height='25' src='images/Zipper-Mouth_Face_Emoji.png' /><br/>יאללה תקום מהמיטה, אחרת במקום R8 אני אביא לך טויוטה."
}

function pissed() {
    document.getElementById("shy").style.opacity = "0.5";
    document.getElementById("love").style.opacity = "0.5";
    document.getElementById("happy").style.opacity = "0.5";
    document.getElementById("ohno").style.opacity = "0.5";

    document.getElementById("pissed").style.opacity = "1";
    document.getElementById("feedback").innerHTML = "היי היי, מה אתה צועק על הבוקר? זה עוד יעלה לך ביוקר...<br/>אם ככה אתה רוצה, אני אהיה רעה,<br/>אפ אפ, תקום מהמיטה מיד יא פרצוף של צרעה! <img width='29' height='25' src='images/honeybee_emoji_icon_png_large.png' />"
}

function happy() {
    document.getElementById("shy").style.opacity = "0.5";
    document.getElementById("love").style.opacity = "0.5";
    document.getElementById("pissed").style.opacity = "0.5";
    document.getElementById("ohno").style.opacity = "0.5";

    document.getElementById("happy").style.opacity = "1";
    document.getElementById("feedback").innerHTML = "ממה אתה כזה מבסוט? יא פרצוף של סמרטוט...<br/>כולה חוגג יום הולדת היום, אז תוריד ת'חיוך ותסתום.<br/>תאמין לי אתה, יש לך מזל שאני אוהבת, ושיש לך יום הולדת... <img width='27' height='25' src='images/1f389.png' />"
}

function ohno() {
    document.getElementById("shy").style.opacity = "0.5";
    document.getElementById("love").style.opacity = "0.5";
    document.getElementById("pissed").style.opacity = "0.5";
    document.getElementById("happy").style.opacity = "0.5";

    document.getElementById("ohno").style.opacity = "1";
    document.getElementById("feedback").innerHTML = "תוריד ת'פאניקה, הכל בסדר<br/>כולה יום הולדת 27, זה רק... רגל ו-3/4 בקבר. <img width='27' height='25' src='images/1f480.png' /><br/>אז אם כבר אתה כזה זקן, אולי כדאי שתקום בזריזות,<br/>שתוכל לנצל כל רגע כל עוד יש לך את האפשרות..."
}