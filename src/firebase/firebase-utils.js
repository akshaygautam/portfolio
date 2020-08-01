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
  if (key === "date") {
    arr.sort(function (a, b) {
      let dateA = new Date(a.created);
      let dateB = new Date(b.created);
      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
  } else {
    arr.sort(function (a, b) {
      if (a.sequence < b.sequence) return -1;
      if (a.sequence < b.sequence) return 1;
      return 0;
    });
  }
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
  return arraySort(
    transformedCertificate.filter((data) => data.active),
    "date"
  );
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

export const convertBioSnapshotToList = (bios) => {
  const tranformedBio = bios.docs.map((doc) => {
    const header = {
      id: doc.id,
      ...doc.data(),
    };
    return header;
  });
  return tranformedBio;
};

export const convertResourcesSnapshotToList = (resources) => {
  let transformedResources = resources.docs.map((doc) => {
    const header = {
      id: doc.id,
      ...doc.data(),
    };
    return header;
  });

  for (var i = 1; i < 5; i++) {
    transformedResources = transformedResources.concat(transformedResources);
  }
  return arraySort(transformedResources, "date");
};
export const firestore = firebase.firestore();

export default firebase;
