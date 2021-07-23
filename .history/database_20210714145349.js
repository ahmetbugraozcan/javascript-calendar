class Database {

    openDatabase() {
        db = openDatabase('yapilacaklar', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);
    }

}

var a = new Database();

console.log(a)