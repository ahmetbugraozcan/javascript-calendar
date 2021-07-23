class Database{
    printA(){
        console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")
    }
    constructor(){
        this.db = openDatabase('yapilacaklarlistesi', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
    }
}