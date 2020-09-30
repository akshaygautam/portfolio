import certificates from "./cerificates";
import demoProjects from "./demoProjects";
import bio from "./bio";

export const getCertificates = () => {
  return arraySort(filterActiveData(certificates), "date");
};

export const getDemoProject = () => {
  return arraySort(filterActiveData(demoProjects), "date");
};

export const getBio = () => {
  return bio[0];
};

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

function filterActiveData(arr) {
  return arr.filter((item) => item.active);
}
