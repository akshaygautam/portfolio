import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEQtWWA_YtR-VG4y7qJeKGBU8Sh7bD5X0",
  authDomain: "crown-db-a0e18.firebaseapp.com",
  databaseURL: "https://crown-db-a0e18.firebaseio.com",
  projectId: "crown-db-a0e18",
  storageBucket: "crown-db-a0e18.appspot.com",
  messagingSenderId: "131627979395",
  appId: "1:131627979395:web:5c1af8e59433606f0b41b6",
  measurementId: "G-07Y73K5FYY",
};

firebase.initializeApp(firebaseConfig);

function arraySort(arr, key) {
  arr.sort(function (a, b) {
    if (a.sequence < b.sequence) return -1;
    if (a.sequence < b.sequence) return 1;
    return 0;
  });
  return arr;
}

export const convertCertificateSnapshotToList = (collections) => {
  const transformedCertificate = collections.docs.map((doc) => {
    const certificate = {
      id: doc.id,
      ...doc.data(),
    };
    return certificate;
  });
  return transformedCertificate.filter((data) => data.active);
};

export const convertHeaderOptionSnapshotToList = (headers) => {
  const transformedHeaders = headers.docs.map((doc) => {
    const header = {
      id: doc.id,
      ...doc.data(),
    };
    return header;
  });
  return arraySort(transformedHeaders.filter((data) => data.active));
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
