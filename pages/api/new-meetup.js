import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://ShotaDatabase:N5kGVY6i-$.!fCa@cluster0.2dici.mongodb.net/myPractice?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("myPractice");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}

export default handler;
