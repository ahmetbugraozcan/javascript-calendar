export default class Database{
   
    constructor(params) {
      this.opendb();
    }

    opendb() {
        this.db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
        db.transaction(function (tx) {   
            tx.executeSql('CREATE TABLE IF NOT EXISTS CLASS (id unique, class)'); 
         });
    }
    
}