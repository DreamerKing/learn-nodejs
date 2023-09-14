import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(PouchDBFind);
const db = new PouchDB("http://king:king123@localhost:5984/users");
const local = new PouchDB('users');

/* db.replicate.to(local)
  .on('complete', (res) => {
    console.log('complete', res);
  })
  .on('error', (err) => {
    console.log('error', err);
  }) */

/* local.put({
  _id: "5",
  name: 'king4',
  age: 22,
  hobbies: [
    "coding"
  ]
}).catch((err) => {
  if (err.name === 'conflict') {
    console.log(err);
  }
}); */

/* local.sync(db)
  .on('complete', (res) => {
    console.log('complete', res);
  })
  .on('change', (change) => {
    console.log('change', change);
  })
  .on('active', (active) => {
    console.log("active", active);
  })
  .on('error', (err) => {
    console.log('error', err);
  })
 */
const king = [{
  _id: "1",
  name: 'king',
  age: 24,
  hobbies: [
    "reading",
    "writing",
  ]
}, {
  _id: "2",
  name: 'kin2',
  age: 4,
  hobbies: [
    "reading",
  ]
}, {
  _id: "3",
  name: 'king3',
  age: 26,
  hobbies: [
  ]
}];
/* local.get('1').then((doc) => {
  local.remove(doc);
}); */
/* db.bulkDocs(king).then((docs) => {
  console.log(docs);
}); */
/* db.get("2").then((doc) => {
  console.log(doc);
}); */

/* local.allDocs({ include_docs: true }).then((docs) => {
  console.dir(docs);
}) */

/* db.put(king).then((doc) => {
  console.dir(doc)
}) */


/* db.info().then((info) => {
  console.log(info);
}); */
/* db.get('1').then((doc) => {
  console.log('doc1', doc)
  doc.age = 24;
  return db.put(doc)
}).then(() => {
  return db.get('1');
}).then((doc) => {
  console.dir(doc);
}); */

/* db.get('1').then((doc) => {
  console.log(doc);
  return db.remove(doc);
}).then((res) => {
  console.log(res);
}) */

/* db.get('1').then((doc) => {
  console.log(doc);
  return db.remove(doc._id, doc._rev);
}).then((res) => {
  console.log(res);
}) */

/* db.get('1').then((doc) => {
  console.log(doc);
  doc._deleted = true;
  return db.put(doc);
}).then((res) => {
  console.log(res);
})  */

// 附件操作
/* 
putAttachment()
getAttachment()
removeAttachment() 
*/

/* local.changes({
  since: 0,
  include_docs: true,
}).then((changes) => {
  console.log('changes:', changes);
  console.dir(changes, { depth: Infinity });
}) */
db.createIndex({
  index: { fields: ['name', "age"] }
});

/* db.find({
  selector: {
    age: { $gt: 4 }
  },
  sort: ['name'],
  limit: 2
}).then((doc) => {
  console.log(doc);
}) */
db.explain({
  selector: {
    age: { $gt: 4 }
  }
}).then((explain) => {
  console.log(explain);
})
