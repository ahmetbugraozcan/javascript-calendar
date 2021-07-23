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

        document.getElementById(`pazar${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`pazartesi${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`sali${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`carsamba${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`persembe${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`cuma${i}`).style.color = "rgb(153, 151, 151)";
        document.getElementById(`cumartesi${i}`).style.color = "rgb(153, 151, 151)";




        if (pazar[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün pazar");
            document.getElementById(`pazar${i}`).style.color = "white";
        } else if (pazartesi[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün pazartesi");
            document.getElementById(`pazartesi${i}`).style.color = "white";
        } else if (sali[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün sali");
            document.getElementById(`sali${i}`).style.color = "white";
        } else if (carsamba[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün carsamba");
            document.getElementById(`carsamba${i}`).style.color = "white";
        } else if (persembe[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün persembe");
            document.getElementById(`persembe${i}`).style.color = "white";
        } else if (cuma[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün cuma");
            document.getElementById(`cuma${i}`).style.color = "white";
        } else if (cumartesi[i] == currentDate.toLocaleDateString()) {
            console.log("Bugün cumartesi");
            document.getElementById(`cumartesi${i}`).style.color = "white";
        }
        //-----------------------------------------------------------------
        if (!isFromThisMonth(pazar[i])) {
            document.getElementById(`pazar${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`pazar${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(pazartesi[i])) {
            document.getElementById(`pazartesi${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`pazartesi${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(sali[i])) {
            document.getElementById(`sali${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`sali${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(carsamba[i])) {
            document.getElementById(`carsamba${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`carsamba${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(persembe[i])) {
            document.getElementById(`persembe${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`persembe${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(cuma[i])) {
            document.getElementById(`cuma${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`cuma${i}`).style.backgroundColor = "#303536"
        }
        if (!isFromThisMonth(cumartesi[i])) {
            document.getElementById(`cumartesi${i}`).style.backgroundColor = "white";
        } else {
            document.getElementById(`cumartesi${i}`).style.backgroundColor = "#303536"
        }
    }


    function isFromThisMonth(yollanandate) {
        console.log(Date(pazar[0]).getMonth());
        if (Date(yollanandate).getMonth() != currentMonth) {
            return false;
        } else {
            return true;
        }
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

    }}