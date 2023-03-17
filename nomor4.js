function isValidPassword(givenPassword) {
  let format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[\w\W]{8,}$/;

  // cek tipe data
  if (givenPassword === undefined) {
    return "ERROR : there is no password";
  }

  if (typeof givenPassword !== "string") {
    return "ERROR : Invalid data type";
  }

  // proses pengecekan kata dengan regex
  if (format.test(givenPassword)) {
    return true;
  } else {
    return false;
  }
}
console.log(isValidPassword("Meong2021"));
console.log(isValidPassword("meong2021"));
console.log(isValidPassword("@eong"));
console.log(isValidPassword("Meong2"));
console.log(isValidPassword(0));
console.log(isValidPassword());
