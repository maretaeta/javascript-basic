function getAngkaTerbesarKedua(dataNumbers) {
  // cek input
  if (dataNumbers === undefined) {
    return "Error : tidak boleh kosong";
  }

  // proses mendapatkan angka terbesar kedua
  if (Array.isArray(dataNumbers) && dataNumbers.length >= 2) {
    let number = new Set(
      dataNumbers
        .sort((a, b) => {
          return a - b;
        })
        .reverse()
    );
    return Array.from(number)[1];
  }

  return "Error : Invalid data type ";
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
