
// var x = pazar;
// console.log(`${x[0]}`)
//dizilerde böyle kullanabiliriz
function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

var db;

var today = new Date();

var currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
//************************************************** */
var allDates = [];
var pazartesi = [];
var sali = [];
var carsamba = [];
var persembe = [];
var cuma = [];
var cumartesi = [];
var pazar = [];
//************************************************** */


var baslanacakDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1, 0,0,0,0);
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
                    docID : `pazar${pazar.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date:new Date(baslanacakDate)
                }

             
                pazar.push(date)
                allDates.push(date)
                break;
            case 1:
                var date = { docID : `pazartesi${pazartesi.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate)
                }
                pazartesi.push(date);
                 allDates.push(date)
                break;
            case 2:
                var date = { docID : `sali${sali.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate)
                }
                sali.push(date);
                allDates.push(date)
                break;
            case 3:
                var date = { docID : `carsamba${carsamba.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate)
                }
                carsamba.push(date);
                allDates.push(date)
                break;

            case 4:
                var date = { docID : `persembe${persembe.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date:new  Date(baslanacakDate)
                }
                persembe.push(date);
                allDates.push(date)
                break;

            case 5:
                var date = {docID : `cuma${cuma.length}`,
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate)
                }
                cuma.push(date);
                allDates.push(date)
                break;

            case 6:
                var date = {
                    localeDate: baslanacakDate.toLocaleDateString(),
                    date: new Date(baslanacakDate),
                    docID : `cumartesi${cumartesi.length}`,
                }
                cumartesi.push(date);
                allDates.push(date)
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
    
        // if(!isFromThisMonth(pazar[i].date)){
        //     document.getElementById(`pazar${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(pazartesi[i].date)){
        //     document.getElementById(`pazartesi${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(sali[i].date)){
        //     document.getElementById(`sali${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(carsamba[i].date)){
        //     document.getElementById(`carsamba${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(persembe[i].date)){
        //     document.getElementById(`persembe${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(cuma[i].date)){
        //     document.getElementById(`cuma${i}`).style = "background-color:red";
        // }
        // if(!isFromThisMonth(cumartesi[i].date)){
        //     document.getElementById(`cumartesi${i}`).style = "background-color:red";
        // }
 
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

        //gügn ay yıl olarak kontrol edicez
        if (pazar[i].date == currentDate) {
          console.log(pazar[i].localeDate)
            document.getElementById(`pazar${i}`).style.color = "black";
            document.getElementById(`pazar${i}`).style.fontWeight = "bold";
        } else if (pazartesi[i].localeDate == currentDate.toLocaleDateString()) {

            document.getElementById(`pazartesi${i}`).style.color = "black";
            document.getElementById(`pazartesi${i}`).style.fontWeight = "bold";
        } else if (sali[i].localeDate == currentDate.toLocaleDateString()) {

            document.getElementById(`sali${i}`).style.color = "black";
            document.getElementById(`sali${i}`).style.fontWeight = "bold";
        } else if (carsamba[i].localeDate == currentDate.toLocaleDateString()) {
            document.getElementById(`carsamba${i}`).style.fontWeight = "bold";
            document.getElementById(`carsamba${i}`).style.color = "black";
        } else if (persembe[i].localeDate == currentDate.toLocaleDateString()) {
            document.getElementById(`persembe${i}`).style.fontWeight = "bold";
            document.getElementById(`persembe${i}`).style.color = "black";
        } else if (cuma[i].localeDate == currentDate.toLocaleDateString()) {
            document.getElementById(`cuma${i}`).style.fontWeight = "bold";
            document.getElementById(`cuma${i}`).style.color = "black";
        } else if (cumartesi[i].localeDate == currentDate.toLocaleDateString()) {
            document.getElementById(`cumartesi${i}`).style.fontWeight = "bold";
            document.getElementById(`cumartesi${i}`).style.color = "black";
            
        }else{
            console.log(new Date(currentDate)==new Date( pazar[2].date))
            console.log("current : " + currentDate)
            console.log("curretn olmayan :  " + pazar[2].date)

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





 function isFromThisMonth(yollanandate) {

// önce bir dateye çevirmemiz gerekiyor ardından kontrolleri yapar ona göre tasarımını değiştiririz
        console.log(yollanandate)
        console.log("CURRENT : " + currentMonth + " YOLLANAN :  " + yollanandate.getMonth())
        
        if (yollanandate.getMonth() != currentMonth) {
            console.log("bu ay DEĞİL")
            return false;
        } else {
            console.log("bu ay")
            return true;
        }
    }

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

//   if(docID  == pazartesi[1].docID){
//       console.log("buradayız")
//   }
    var dateObj;


    for (let element of allDates) {

        if(element.docID == docID){
            dateObj = element;
            break;
        }
      }
      
      isFromThisMonth(dateObj.date)
  
    var doc = document.getElementById(docID);
   
  
//currentmonth olmaz o cellin tarihini almamız gerekiyor
    return dateObj.date.getDate() + " "+ getMonthAsString(dateObj.date.getMonth()) +" " +dateObj.date.getFullYear() + " ";
   
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
    allDates = [];
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
    allDates = [];
    if (currentMonth < 11) {
        currentMonth++;
    } else {
        currentMonth = 0;
        currentYear++;
    }
    baslanacakDate = new Date(currentYear, currentMonth, 1);
    fillCalendar();

}



