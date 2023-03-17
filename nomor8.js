const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  // cek tipe data
  if (!Array.isArray(dataPenjualan)) {
    console.error("Invalid data type");
    return {};
  }

  let totalKeuntungan = 0;
  let totalModal = 0;
  let produkTerlaris = dataPenjualan[0];
  let persentaseKeuntungan = 0;
  let penulisBuku = {};
  let penulisTerlaris = "";

  // looping
  dataPenjualan.forEach((data) => {
    modal = data.hargaBeli * (data.totalTerjual + data.sisaStok);
    keuntungan = data.hargaJual * data.totalTerjual - modal;
    totalModal += modal;
    totalKeuntungan += keuntungan;

    // mengecek penulisBuku
    if (data.totalTerjual > produkTerlaris.totalTerjual) {
      produkTerlaris = data;
    }
    if (penulisBuku[data.penulis])
      penulisBuku[data.penulis] += data.totalTerjual;
    else penulisBuku[data.penulis] = data.totalTerjual;
  });
  console.log(penulisBuku);

  // menghitung presentasi keuntungan
  persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

  // menampilkan value dari key dan mengeksekusi
  penulisTerlaris = Object.keys(penulisBuku).reduce((a, b) => {
    return penulisBuku[a] > penulisBuku[b] ? a : b;
  });

  const result = {
    totalKeuntungan: "Rp. " + totalKeuntungan.toLocaleString("id-ID"),
    totalModal: "Rp. " + totalModal.toLocaleString("id-ID"),
    persentaseKeuntungan: Math.round(persentaseKeuntungan) + "%",
    produkTerlaris: produkTerlaris.namaProduk,
    penulisTerlaris: penulisTerlaris,
  };
  return result;
}

console.log(getInfoPenjualan(dataPenjualanNovel));
