var db;

function openDatabase() {
    db = openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
}