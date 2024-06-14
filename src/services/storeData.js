import { Firestore } from '@google-cloud/firestore';

const storeData = async (id, data) => {
  const db = new Firestore({
    keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
    projectId: 'c241-ps134',
    databaseId: 'scanned',
  });

  const predictCollection = db.collection('scanned');

  return predictCollection.doc(id).set(data);
};

export default storeData;
