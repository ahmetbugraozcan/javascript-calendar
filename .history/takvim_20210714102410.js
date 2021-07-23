function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
var currentDate = new Date();
var pazartesi = [];
var sali = [];
var carsamba = [];
var persembe = [];
var cuma = [];
var cumartesi = [];
var pazar = [];
var gunler = ["pazar", "pazartesi", "sali", "carsamba", "persembe", "cuma", "cumartesi"];
var baslanacakDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
var currentMonth = baslanacakDate.getMonth();
var currentYear = baslanacakDate.getFullYear();
// document.getElementById("previous-button").onclick = previousDate();
// document.getElementById("next-button").onclick = nextDate();

fillCalendar();

function fillCalendar() {

    var firstDate = baslanacakDate.getDay();
    if (firstDate == 0) {
        firstDate = 7;
    }
    baslanacakDate.setDate((baslanacakDate.getDate()) - (firstDate));
    // var today = new Date();
    // var todayWithoutTime = new Date(today.getFullYear(), today.getMonth(), today.getDate() );


    var counter = 0;
    for (let i = 1; i <= 42; i++) {
        baslanacakDate.setDate((baslanacakDate.getDate()) + (1));
        // bir tabloda 42 gün var o ayın kaç çektiğini bul bu aydan geriye kaç sayacağız ona bul bu aydan ileri kaç sayacağız onu bul ve ona göre bir date oluştur.
        //ardından bu for döngüsünü kullan

        // if(baslanacakDate.toDateString() ==  todayWithoutTime.toDateString()){
        //     console.log("bugün eşitlendi : " + i);
        //     counter = i;
        // }    

        switch (baslanacakDate.getDay()) {
            case 0:
                pazar.push(baslanacakDate.toLocaleDateString());

                break;
            case 1:
                pazartesi.push(baslanacakDate.toLocaleDateString());
                break;
            case 2:
                sali.push(baslanacakDate.toLocaleDateString());
                break;
            case 3:
                carsamba.push(baslanacakDate.toLocaleDateString());
                break;

            case 4:
                persembe.push(baslanacakDate.toLocaleDateString());
                break;

            case 5:
                cuma.push(baslanacakDate.toLocaleDateString());
                break;

            case 6:
                cumartesi.push(baslanacakDate.toLocaleDateString());
                break;
        }
    }


    document.getElementById("currentDate").innerHTML = getMonthAsString(currentMonth) + " " + currentYear;
    for (let i = 0; i < 6; i++) {
        document.getElementById(`pazar${i}`).innerHTML = getDayAsString(pazar[i]);

        document.getElementById(`pazartesi${i}`).innerHTML = getDayAsString(pazartesi[i]);
        document.getElementById(`sali${i}`).innerHTML = getDayAsString(sali[i]);
        document.getElementById(`carsamba${i}`).innerHTML = getDayAsString(carsamba[i]);
        document.getElementById(`persembe${i}`).innerHTML = getDayAsString(persembe[i]);
        document.getElementById(`cuma${i}`).innerHTML = getDayAsString(cuma[i]);
        document.getElementById(`cumartesi${i}`).innerHTML = getDayAsString(cumartesi[i]);

        document.getElementById(`pazar${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`pazartesi${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`sali${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`carsamba${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`persembe${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`cuma${i}`).style = "color: #0000FF; font-weight:bold;";
        document.getElementById(`cumartesi${i}`).style = "color: #0000FF; font-weight:bold;";

        document.getElementById(`pazar${i}`).onclick = function (event) {
            testfunc(`pazar${i}`);
        }
        document.getElementById(`pazartesi${i}`).onclick = function (event) {
            testfunc(`pazartesi${i}`);
        }
        document.getElementById(`sali${i}`).onclick = function (event) {
            testfunc(`sali${i}`);
        }
        document.getElementById(`carsamba${i}`).onclick = function (event) {
            testfunc(`carsamba${i}`);
        }
        document.getElementById(`persembe${i}`).onclick = function (event) {
            testfunc(`persembe${i}`);
        }

        document.getElementById(`cuma${i}`).onclick = function (event) {
            testfunc(`cuma${i}`);
        }
        document.getElementById(`cumartesi${i}`).onclick = function (event) {
            testfunc(`cumartesi${i}`);
        }


        if (pazar[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`pazar${i}`).style.color = "white";
        } else if (pazartesi[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`pazartesi${i}`).style.color = "white";
        } else if (sali[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`sali${i}`).style.color = "white";
            document.getElementById(`sali${i}`).style.fontWeight = "bold";
        } else if (carsamba[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`carsamba${i}`).style.color = "white";
        } else if (persembe[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`persembe${i}`).style.color = "white";
        } else if (cuma[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`cuma${i}`).style.color = "white";
        } else if (cumartesi[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`cumartesi${i}`).style.color = "white";
        }


        //-----------------------------------------------------------------
        // if (!isFromThisMonth(pazar[i])) {
        //     document.getElementById(`pazar${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`pazar${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(pazartesi[i])) {
        //     document.getElementById(`pazartesi${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`pazartesi${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(sali[i])) {
        //     document.getElementById(`sali${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`sali${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(carsamba[i])) {
        //     document.getElementById(`carsamba${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`carsamba${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(persembe[i])) {
        //     document.getElementById(`persembe${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`persembe${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(cuma[i])) {
        //     document.getElementById(`cuma${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`cuma${i}`).style.backgroundColor = "#303536"
        // }
        // if (!isFromThisMonth(cumartesi[i])) {
        //     document.getElementById(`cumartesi${i}`).style.backgroundColor = "white";
        // } else {
        //     document.getElementById(`cumartesi${i}`).style.backgroundColor = "#303536"
        // }
    }



}

//  function isFromThisMonth(yollanandate) {
//         console.log(Date(pazar[0]));
//         if (Date(yollanandate).getMonth() != currentMonth) {
//             return false;
//         } else {
//             return true;
//         }
//     }
function disableNotePad(){
    var notePad = document.getElementById("not-defteri");
    notePad.style.display = "none";
}

function testfunc(text) {
    var list = document.getElementById("not-defteri");
    var paragraf1 = document.getElementById("not-defteri-1");
    var paragraf2 = document.getElementById("not-defteri-2");
    list.style.display = "block";
    paragraf1.innerHTML = `${text}`;
    paragraf2.innerHTML =`${text}`;
    // while (list.hasChildNodes()) {
    //     list.removeChild(list.firstChild);
    // }
    // var element = document.createElement("div"); // Create a <p> node
    // var yapilacaklar= document.createTextNode(`${text}-${currentMonth}-${currentYear}  yapılacaklar`); 


    // var x = document.createElement("div"); // Create a <p> node
    // var t = document.createTextNode(`${text}`); 
    // element.appendChild(yapilacaklar);
    // x.appendChild(t);
    // list.appendChild(element);
    // list.appendChild(x);
  
    //databaseye birşeyler eklerken key olarak bu text değeri + yıl ay olarak ekleriz örneğin pazartesi[4] value olarak da valuesunu yollarız ve çekerken de bu key değerine göre çekeriz

}

function previousDate() {

    pazar = [];
    pazartesi = [];
    sali = [];
    carsamba = [];
    persembe = [];
    cuma = [];
    cumartesi = [];
    if (currentMonth > 0) {
        currentMonth--;
    } else {
        currentMonth = 11;
        currentYear--;
    }
    baslanacakDate = new Date(currentYear, currentMonth, 1);
    fillCalendar();


}

function getDayAsString(string) {
    var donulecekString = "";
    if (string[0] == 0) {} else {
        donulecekString += string[0];
    }
    donulecekString += string[1];
    return donulecekString;
}





function getMonthAsString(date) {
    switch (date) {
        case 0:
            return "Ocak";
        case 1:
            return "Şubat";
        case 2:
            return "Mart";
        case 3:
            return "Nisan";
        case 4:
            return "Mayıs";
        case 5:
            return "Haziran";
        case 6:
            return "Temmuz";
        case 7:
            return "Ağustos";
        case 8:
            return "Eylül";
        case 9:
            return "Ekim";
        case 10:
            return "Kasım";
        case 11:
            return "Aralık";
    }
}

function nextDate() {

    pazar = [];
    pazartesi = [];
    sali = [];
    carsamba = [];
    persembe = [];
    cuma = [];
    cumartesi = [];
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    baslanacakDate = new Date(currentYear, currentMonth, 1);
    fillCalendar();

}