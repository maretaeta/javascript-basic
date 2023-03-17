function checkEmail(email) {
  // cek tipe data
  if (email === undefined) {
    return "Error : Tidak ada email untuk diperiksa";
  }
  if (typeof email !== "string") {
    return "Error : Email harus berupa string";
  }
  if (!/[@]/.test(email)) {
    return "Error : Email harus berisi karakter '@' ";
  }

  // proses pengecekan kata dengan regex
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "VALID";
  } else {
    return "INVALID";
  }
}

console.log(checkEmail("apranata@binar.co.id"));
console.log(checkEmail("apranata@binar.com"));
console.log(checkEmail("apranata@binar"));
console.log(checkEmail("apranata"));
console.log(checkEmail(3322));
console.log(checkEmail()); //
