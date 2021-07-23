export default class Database{
   //database nesnesi üzerinden gidelim
    constructor() {
        this.database = this.opendb();
        console.log(this.database);
    }

    opendb() {
        var db;
        db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
        db.transaction(function (tx) {   
            tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
         });
    }
    
}