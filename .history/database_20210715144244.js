export default class Database{
   //database nesnesi üzerinden gidelim
    constructor() {
        this.database = this.opendb();
    }

    opendb() {
        var db;
        console.log("Buraya girdik");
        db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
        db.transaction(function (tx) {   
            tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
         });
         return db;
    }
     addTodoToDatabase(key, value){
        console.log(this.database);
        //  db.transaction(function (tx) { 
        //     tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
        //     tx.executeSql('INSERT INTO CLASS (id, class) VALUES (?, ?)', [key, value]);; 
        //  });
    
    }
    
    
}