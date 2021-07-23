
// var x = pazar;
// console.log(`${x[0]}`)
//dizilerde böyle kullanabiliriz
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

var db;
var currentDate = new Date();
//************************************************** */
var pazartesi = [];
var sali = [];
var carsamba = [];
var persembe = [];
var cuma = [];
var cumartesi = [];
var pazar = [];
//************************************************** */


var baslanacakDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
var currentMonth = baslanacakDate.getMonth();
var currentYear = baslanacakDate.getFullYear();

var databaseResponse;

//if dbresponse undefined kontrolü yapılabilir


opendb();


fillCalendar();




  function returnDatabasePromise(){
    
    return new Promise((resolve,reject)=>{
         db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM CLASS', [], function (tx, results) { 
                databaseResponse = results;
                resolve(databaseResponse)
                //   myCallback(results);
  },  null);
      })
    
    })
 }


 async function readDatabase() {
    let result = await returnDatabasePromise()
    return result;

}; 






function addTodoToDatabase(key, value){
  
     db.transaction(function (tx) { 
        tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
        tx.executeSql('INSERT OR REPLACE INTO CLASS (id, class) VALUES (?, ?)', [key, value]);; 
     });
 

}

function opendb() {
    db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
    db.transaction(function (tx) {   
        tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
     });
}





//databaseresponse undefined ise databaseyi doldurur ardından fillcalendarfunctionu çağırır.
// değilse direk fillCalendarFunctionu çağırır
// eğer bir değişiklik olur da tekrar okumamız gerekirse
//o tarafta databaseresponse değerini undefined yaparız. 
function fillCalendar() {
if(databaseResponse == undefined){
    readDatabase().then((value)=>{
        console.log(databaseResponse);
        fillCalendarFunction();
    })
}else{
    fillCalendarFunction();
}
}

//takvimi dolduran fonksiyon
function fillCalendarFunction(){
   
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
                //   pazar.push(baslanacakDate.toLocaleDateString());
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }

             
                pazar.push(date)
                break;
            case 1:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }
                pazartesi.push(date);
                break;
            case 2:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }
                sali.push(date);
                break;
            case 3:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }
                carsamba.push(date);
                break;

            case 4:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }
                persembe.push(date);
                break;

            case 5:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: baslanacakDate
                }
                cuma.push(date);
                break;

            case 6:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate)
                }
                cumartesi.push(date);
                break;
        }
    }


    document.getElementById("currentDate").innerHTML = getMonthAsString(currentMonth) + " " + currentYear;
    for (let i = 0; i < 6; i++) {
      

        document.getElementById(`pazar${i}`).innerHTML = getDayAsString(pazar[i].localeDate);
        document.getElementById(`pazartesi${i}`).innerHTML= getDayAsString(pazartesi[i].localeDate);
        document.getElementById(`sali${i}`).innerHTML = getDayAsString(sali[i].localeDate);
        document.getElementById(`carsamba${i}`).innerHTML = getDayAsString(carsamba[i].localeDate);
        document.getElementById(`persembe${i}`).innerHTML = getDayAsString(persembe[i].localeDate);
        document.getElementById(`cuma${i}`).innerHTML = getDayAsString(cuma[i].localeDate);
        document.getElementById(`cumartesi${i}`).innerHTML = getDayAsString(cumartesi[i].localeDate );
    

 
        // document.getElementById(`pazar${i}`).style.color = "#0000FF";
        // document.getElementById(`pazar${i}`).style.fontWeight = "500";
        // document.getElementById(`pazar${i}`).style.backgroundColor = "red"; işe yarıyor



        // document.getElementById(`pazartesi${i}`).style.color = "#0000FF";
        // document.getElementById(`pazartesi${i}`).style.fontWeight = "500";

        // document.getElementById(`sali${i}`).style.color = "#0000FF";
        // document.getElementById(`sali${i}`).style.fontWeight = "500";

        // document.getElementById(`carsamba${i}`).style.color = "#0000FF";
        // document.getElementById(`carsamba${i}`).style.fontWeight = "500";

        // document.getElementById(`persembe${i}`).style.color = "#0000FF";
        // document.getElementById(`persembe${i}`).style.fontWeight = "500";

        // document.getElementById(`cuma${i}`).style.color = "#0000FF";
        // document.getElementById(`cuma${i}`).style.fontWeight = "500";

        // document.getElementById(`cumartesi${i}`).style.color = "#0000FF";
        // document.getElementById(`cumartesi${i}`).style.fontWeight = "500";

        document.getElementById(`pazar${i}`).onclick = function (event) {
            operNotePad(`pazar${i}`);
        }
        document.getElementById(`pazartesi${i}`).onclick = function (event) {
            operNotePad(`pazartesi${i}`);
        }
        document.getElementById(`sali${i}`).onclick = function (event) {
            operNotePad(`sali${i}`);
        }
        document.getElementById(`carsamba${i}`).onclick = function (event) {
            operNotePad(`carsamba${i}`);
        }
        document.getElementById(`persembe${i}`).onclick = function (event) {
            operNotePad(`persembe${i}`);
        }

        document.getElementById(`cuma${i}`).onclick = function (event) {
            operNotePad(`cuma${i}`);
        }
        document.getElementById(`cumartesi${i}`).onclick = function (event) {
            operNotePad(`cumartesi${i}`);
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
   
        for(var i = 0; i < 6; i++){


            

            for(var j = 0; j < databaseResponse["rows"].length; j++){
                if(`pazartesi${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
             
                    addChildToCell(databaseResponse["rows"][j]["class"],`pazartesi${i}`)
                }
                if(`sali${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
                 
               
                    addChildToCell(databaseResponse["rows"][j]["class"],`sali${i}`)
                }
                if(`carsamba${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
               
                    addChildToCell(databaseResponse["rows"][j]["class"],`carsamba${i}`)
                }
                if(`persembe${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
             
                    addChildToCell(databaseResponse["rows"][j]["class"],`persembe${i}`)
                }
                if(`cuma${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
                    addChildToCell(databaseResponse["rows"][j]["class"],`cuma${i}`)
                }
                if(`cumartesi${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
                    
                    addChildToCell(databaseResponse["rows"][j]["class"],`cumartesi${i}`)
                }
                if(`pazar${i}` + "-" + currentYear + "-" + currentMonth == (databaseResponse["rows"][j]["id"])){
                  
                    addChildToCell(databaseResponse["rows"][j]["class"],`pazar${i}`)
                }
                
            }
            
        }
      
    setBackgroundImage();
    
 
}





//  function isFromThisMonth(yollanandate) {
// var date = new Date(pazar[0]);
//önce bir dateye çevirmemiz gerekiyor ardından kontrolleri yapar ona göre tasarımını değiştiririz
//     console.log(date.getDate())
//         console.log(Date(pazar[0]));
//         if (Date(yollanandate).getMonth() != currentMonth) {
//             return false;
//         } else {
//             return true;
//         }
//     }

function removeChildNode(docID) {
   var doc = document.getElementById(docID);

   if(doc.hasChildNodes && (document.getElementById(docID).childNodes[1] != undefined)){
  
    document.getElementById(docID).childNodes[1].remove()
   }
}

function getTodoText(docID){
    var doc = document.getElementById(docID);
    if(doc.hasChildNodes && (document.getElementById(docID).childNodes[1] != undefined)){
      return document.getElementById(docID).childNodes[1].textContent;
    
    }else{
        return "";
    }
}

function readChildNode(docID) {
    // var x = pazar;
    // console.log(`${x[0]}`)



    console.log("doc id :" + currentMonth)
    console.log("doc id : " + typeof cumartesi[5].date.getMonth)

    var doc = document.getElementById(docID);
  
//currentmonth olmaz o cellin tarihini almamız gerekiyor
    return document.getElementById(docID).childNodes[0].textContent + " "+ getMonthAsString(currentMonth) +" " +currentYear + " ";
   
 }



function disableNotePad() {
    var notePad = document.getElementById("not-defteri");
    notePad.style.display = "none";
}

//text parametresi döküman idsi onu düzelt bi ara 
function operNotePad(text) {
    
    var modal = document.getElementById("myModal");
    var paragraf1 = document.getElementById("not-defteri-1");
    var paragraf2 = document.getElementById("not-defteri-input");
    modal.style.display = "block";
    
    paragraf1.innerHTML = readChildNode(text);
    paragraf2.value = getTodoText(text);


    var closebutton = document.getElementsByClassName("close")[0];
    var savebutton = document.getElementsByClassName("save")[0];
   
    closebutton.onclick = function () {
        modal.style.display = "none";
        //inputu temizleyebiliriz burada
    }
    savebutton.onclick = function (){
        databaseResponse = undefined;
        var key = text + "-" + currentYear + "-" + currentMonth ;
        var value = document.getElementById("not-defteri-input").value;
        addTodoToDatabase(key, value);
        addChildToCell(value, text);
        paragraf1.innerHTML = readChildNode(text);
      

    }

 

    //databaseye birşeyler eklerken key olarak bu text değeri + yıl ay olarak ekleriz örneğin pazartesi[4] value olarak da valuesunu yollarız ve çekerken de bu key değerine göre çekeriz

}

function addChildToCell(value, docName){
    // removeAllChildNodes(docName)
    removeChildNode(docName)
    var node = document.createElement("p");            
    var textnode = document.createTextNode(value);
    // node.id = `${docName}text`
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



