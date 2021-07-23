export default class Database {

    constructor(){
        
    }
    openDatabase() {
        this.db = openDatabase('yapilacaklar', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
    }




}