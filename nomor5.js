function getSplitName(personName) {
  //cek tipe data
  if (typeof personName !== "string") {
    return "Error : Invalid data type";
  }

  // proses membagi sebuah nama
  const splittedName = personName.split(" ");

  if (splittedName.length > 3) {
    return "Error : this function is only for 3 characters name";
  } else if (splittedName.length === 3) {
    return {
      firstName: splittedName[0],
      middleName: splittedName[1],
      lastName: splittedName[2],
    };
  } else if (splittedName.length === 2) {
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: splittedName[1],
    };
  } else if (splittedName.length === 1) {
    return {
      firstName: splittedName[0],
      middleName: null,
      lastName: null,
    };
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aurelia Sukma Darma"));
console.log(getSplitName(0));
