

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

var db;
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
opendb();
readData();





function readData(){
    var result;
    db.transaction(function (tx) { 
        tx.executeSql('SELECT * FROM CLASS', [], function (tx, results) { 
            console.log(results)        
            a=result;
            // console.log(result.rows[0]["id"]);
            // if(result.rows[0]["id"] == "2021-6-sali2"){
            //     console.log("True")
            // }
        }, null);
    
     });
 console.log(result);
 return result;
  
}

function addTodoToDatabase(key, value){
  
     db.transaction(function (tx) { 
        tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
        tx.executeSql('INSERT OR REPLACE INTO CLASS (id, class) VALUES (?, ?)', [key, value]);; 
     });
     console.log("BAŞARIYLA EKLENDİ");

}

function opendb() {
    db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
    db.transaction(function (tx) {   
        tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
     });
}






function fillCalendar() {

    var firstDate = baslanacakDate.getDay();
    if (firstDate == 0) {
        firstDate = 7;
    }
    baslanacakDate.setDate((baslanacakDate.getDate()) - (firstDate));


    for (let i = 1; i <= 42; i++) {
        baslanacakDate.setDate((baslanacakDate.getDate()) + (1));
        // bir tabloda 42 gün var o ayın kaç çektiğini bul bu aydan geriye kaç sayacağız ona bul bu aydan ileri kaç sayacağız onu bul ve ona göre bir date oluştur.
        //ardından bu for döngüsünü kullan

   

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



        //burada databaseden okuma yapacağız gelen değerleri innerhtml veya başka bir şeye eşitleyeceğiz
        document.getElementById(`pazar${i}`).innerHTML = getDayAsString(pazar[i]);
        document.getElementById(`pazartesi${i}`).innerHTML= getDayAsString(pazartesi[i]);
        document.getElementById(`sali${i}`).innerHTML = getDayAsString(sali[i]);
        document.getElementById(`carsamba${i}`).innerHTML = getDayAsString(carsamba[i]);
        document.getElementById(`persembe${i}`).innerHTML = getDayAsString(persembe[i]);
        document.getElementById(`cuma${i}`).innerHTML = getDayAsString(cuma[i]);
        document.getElementById(`cumartesi${i}`).innerHTML = getDayAsString(cumartesi[i]);
        //database'den pazartesi[0]-currentmonth-currentyear ile datayı getir sonra innerhtmle eşitle  







        document.getElementById(`pazar${i}`).style.color = "#0000FF";
        document.getElementById(`pazar${i}`).style.fontWeight = "500";

        document.getElementById(`pazartesi${i}`).style.color = "#0000FF";
        document.getElementById(`pazartesi${i}`).style.fontWeight = "500";

        document.getElementById(`sali${i}`).style.color = "#0000FF";
        document.getElementById(`sali${i}`).style.fontWeight = "500";

        document.getElementById(`carsamba${i}`).style.color = "#0000FF";
        document.getElementById(`carsamba${i}`).style.fontWeight = "500";

        document.getElementById(`persembe${i}`).style.color = "#0000FF";
        document.getElementById(`persembe${i}`).style.fontWeight = "500";

        document.getElementById(`cuma${i}`).style.color = "#0000FF";
        document.getElementById(`cuma${i}`).style.fontWeight = "500";

        document.getElementById(`cumartesi${i}`).style.color = "#0000FF";
        document.getElementById(`cumartesi${i}`).style.fontWeight = "500";

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

            document.getElementById(`pazar${i}`).style.color = "black";
            document.getElementById(`pazar${i}`).style.fontWeight = "bold";
        } else if (pazartesi[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`pazartesi${i}`).style.color = "black";
            document.getElementById(`pazartesi${i}`).style.fontWeight = "bold";
        } else if (sali[i] == currentDate.toLocaleDateString()) {

            document.getElementById(`sali${i}`).style.color = "black";
            document.getElementById(`sali${i}`).style.fontWeight = "bold";
        } else if (carsamba[i] == currentDate.toLocaleDateString()) {
            document.getElementById(`carsamba${i}`).style.fontWeight = "bold";
            document.getElementById(`carsamba${i}`).style.color = "black";
        } else if (persembe[i] == currentDate.toLocaleDateString()) {
            document.getElementById(`persembe${i}`).style.fontWeight = "bold";
            document.getElementById(`persembe${i}`).style.color = "black";
        } else if (cuma[i] == currentDate.toLocaleDateString()) {
            document.getElementById(`cuma${i}`).style.fontWeight = "bold";
            document.getElementById(`cuma${i}`).style.color = "black";
        } else if (cumartesi[i] == currentDate.toLocaleDateString()) {
            document.getElementById(`cumartesi${i}`).style.fontWeight = "bold";
            document.getElementById(`cumartesi${i}`).style.color = "black";
        }


       
    }

    setBackgroundImage();

}

//  function isFromThisMonth(yollanandate) {
//         console.log(Date(pazar[0]));
//         if (Date(yollanandate).getMonth() != currentMonth) {
//             return false;
//         } else {
//             return true;
//         }
//     }
function disableNotePad() {
    var notePad = document.getElementById("not-defteri");
    notePad.style.display = "none";
}



function testfunc(text) {
    
    var modal = document.getElementById("myModal");
    var paragraf1 = document.getElementById("not-defteri-1");
    modal.style.display = "block";
    paragraf1.innerHTML = `${text}`;



    var closebutton = document.getElementsByClassName("close")[0];
    var savebutton = document.getElementsByClassName("save")[0];
   
    closebutton.onclick = function () {
        modal.style.display = "none";
        //inputu temizleyebiliriz burada
    }
    savebutton.onclick = function (){
        var key = currentYear + "-" + currentMonth + "-" + text;
        var value = document.getElementById("not-defteri-input").value;
        addTodoToDatabase(key, value);
        addChildToCell(value, text);
      

    }

 

    //databaseye birşeyler eklerken key olarak bu text değeri + yıl ay olarak ekleriz örneğin pazartesi[4] value olarak da valuesunu yollarız ve çekerken de bu key değerine göre çekeriz

}
function addChildToCell(value, docName){
    var node = document.createElement("p");            
    var textnode = document.createTextNode(value);
    node.appendChild(textnode);    
    document.getElementById(docName).appendChild(node);
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
            return "OCAK";
        case 1:
            return "ŞUBAT";
        case 2:
            return "MART";
        case 3:
            return "NİSAN";
        case 4:
            return "MAYIS";
        case 5:
            return "HAZİRAN";
        case 6:
            return "TEMMUZ";
        case 7:
            return "AĞUSTOS";
        case 8:
            return "EYLÜL";
        case 9:
            return "EKİM";
        case 10:
            return "KASIM";
        case 11:
            return "ARALIK";
    }
}

function setBackgroundImage() {
    var doc = document.getElementById("calendar-header");
    console.log("bu ay : " + currentMonth)


    switch (currentMonth) {
        
        case 11:
        case 0:
        case 1:
         
            doc.style.backgroundImage = "url('/images/kis.png')";
            break;
        case 2:
        case 3:
        case 4:
        
            doc.style.backgroundImage = "url('/images/ilkbahar.jpg')";
            break;
        case 5:
        case 6:
        case 7:
      
            doc.style.backgroundImage = "url('/images/yaz.jpg')";
            break;
        case 8:
        case 9:
        case 10:
        
            doc.style.backgroundImage = "url('/images/sonbahar.jpg')";
            break;

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



