import { Firestore } from '@google-cloud/firestore';

const storeData = async (id, data) => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'your-project-id',
    databaseId: 'your-project-database-id',
  });

  const predictCollection = db.collection('your-project-collection');

  return predictCollection.doc(id).set(data);
};

export default storeData;
