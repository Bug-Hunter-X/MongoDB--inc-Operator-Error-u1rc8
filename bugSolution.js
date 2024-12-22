```javascript
// Correct use of $inc operator, handles field creation and data type validation
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{ "counter": 1 }, upsert: true})
// or you can explicitly check and create the field
db.collection.findOne({"_id":ObjectId("651234567890")}).then(doc =>{
if(doc){
db.collection.updateOne({"_id":ObjectId("651234567890")},{$inc:{ "counter": 1 }})
}else{
db.collection.insertOne({"_id":ObjectId("651234567890"), counter:1})
}
})
```