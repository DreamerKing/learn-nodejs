import PouchDB from "pouchdb";
import PouchDBFind from "pouchdb-find";

PouchDB.plugin(PouchDBFind);
const db = new PouchDB("http://localhost:5984/users", {
  auth: {
    username: "king",
    password: "king123"
  }
});

async function test() {
  await db.createIndex({
    index: {
      fields: ["name", "age"]
    }
  });
  const doc = await db.find({
    selector: {
      age: { $gt: 4 }
    }
  });
  return doc;
}

async function createDoc(doc) {
  const result = await db.post(doc);
  return result;
}

async function getDocs() {
  const docs = await db.allDocs({ include_docs: true });
  return docs;
}

getDocs().then((docs) => {
  console.log(docs.rows);
})
/* createDoc({
  name: "test",
  age: 0
}).then((doc) => {
  console.log(doc);
}); */

/* test().then((doc) => {
  console.log(doc);
}) */
