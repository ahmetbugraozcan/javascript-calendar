
class Database{
    db;

    openDatabase(){
        db = openDatabase('yapilacaklar', '1.0', 'Yapilacaklar listesi', 2 * 1024 * 1024);  

    }
 



}

 new Database();