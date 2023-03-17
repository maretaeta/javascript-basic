const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function getTotalPenjualan(dataPenjualan) {
  // cek tipe data
  if (!Array.isArray(dataPenjualan))
    return "ERROR : Data Penjualan must be Array";

  //mengeksekusi nilai dari elemen array
  const totalPenjualan = dataPenjualan.reduce((total, data) => {
    return total + data.totalTerjual;
  }, 0);

  //menguji format angka
  if (isNaN(totalPenjualan)) return "ERROR : Format data is false !";
  else return totalPenjualan;
}
console.log(getTotalPenjualan(dataPenjualanPakAldi));
