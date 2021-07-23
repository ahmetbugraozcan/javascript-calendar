export  class Database{
   

    constructor(){
        this.db = openDatabase('test', '1.0', 'test', 2 * 1024 * 1024);
    }

    printTest(){
        console.log("test");
    }
}