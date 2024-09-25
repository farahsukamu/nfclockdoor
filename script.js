// Mendapatkan referensi ke database Firebase
const database = firebase.database();

// Mengambil elemen tombol dari HTML
const addAccessButton = document.getElementById("addAccessButton");
const removeAccessButton = document.getElementById("removeAccessButton");
const unlockButton = document.getElementById("unlockButton");

// Fungsi untuk menambahkan akses baru
addAccessButton.addEventListener("click", function() {
    const uid = prompt("Tempatkan UID kartu RFID baru:");
    if (uid) {
        // Menambahkan UID baru ke database Firebase
        database.ref('UIDs/' + uid).set({
            access: true
        })
        .then(() => {
            alert("Akses baru berhasil ditambahkan.");
        })
        .catch((error) => {
            alert("Gagal menambahkan akses: " + error);
        });
    }
});

// Fungsi untuk menghapus akses
removeAccessButton.addEventListener("click", function() {
    const uid = prompt("Masukkan UID kartu RFID yang ingin dihapus:");
    if (uid) {
        // Menghapus UID dari database Firebase
        database.ref('UIDs/' + uid).remove()
        .then(() => {
            alert("Akses berhasil dihapus.");
        })
        .catch((error) => {
            alert("Gagal menghapus akses: " + error);
        });
    }
});

// Fungsi untuk membuka kunci pintu
unlockButton.addEventListener("click", function() {
    // Mengupdate posisi servo di Firebase
    database.ref('Servo/position').set(180)
    .then(() => {
        alert("Servo diubah ke posisi 180 derajat untuk membuka kunci.");
        // Mengatur posisi servo kembali setelah 5 detik
        setTimeout(() => {
            database.ref('Servo/position').set(0);
        }, 5000); // Kembali ke 0 derajat setelah 5 detik
    })
    .catch((error) => {
        alert("Gagal menggerakkan servo: " + error);
    });
});
