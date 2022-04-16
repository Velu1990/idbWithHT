import * as alasql from 'alasql';


export const idb = (IDDBName, IDBColumnNames, IdbVersion) =>{
    var IDBColumnNames1 = IDBColumnNames.split(',');
if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

var DBOpenRequest = window.indexedDB.open(IDDBName, IdbVersion);
// these two event handlers act on the database being opened successfully, or not
DBOpenRequest.onerror = function (event) {
    console.log('db cannot be created');

};

DBOpenRequest.onsuccess = function (event) {
    console.log('db  created successfully');
    var db = DBOpenRequest.result;

};

DBOpenRequest.onupgradeneeded = function (event) {
    var db = event.target.result;
    console.log(event)
    db.onerror = function (event) {
       
        alert('error');
    };

    db.onsuccess = function (event) {
        //console.log('updated');

    }   

    // Create an objectStore for this database
    if (event.oldVersion < 1) {
        var objectStore = db.createObjectStore(IDDBName, { keyPath: "id", autoIncrement: true });
        for(let i =0; i<IDBColumnNames1.length;i++) {
          objectStore.createIndex(IDBColumnNames1[i].trim(), IDBColumnNames1[i].trim(), { unique: false });
        }
        
    }else if (event.oldVersion < IdbVersion) {
        db.deleteObjectStore(IDDBName);
        var objectStore = db.createObjectStore(IDDBName, { keyPath: "id", autoIncrement: true });
        for(let i =0; i<IDBColumnNames1.length;i++) {
            objectStore.createIndex(IDBColumnNames1[i].trim(), IDBColumnNames1[i].trim(), { unique: false });
        }
       
    }

};
} 


export const AddData = (data , row ) =>{
    
}