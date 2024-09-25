// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBU6FpDXlpesoWvfRc4ZtuM30tmW-yfiMQ",
  authDomain: "rfid-lockdoor.firebaseapp.com",
  databaseURL: "https://rfid-lockdoor-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rfid-lockdoor",
  storageBucket: "rfid-lockdoor.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Mendapatkan referensi ke database
const database = firebase.database();

// Fungsi untuk menambahkan UID baru
function addUID() {
  const newUID = document.getElementById('new-uid').value;
  if (newUID) {
    database.ref('UIDs/' + newUID).set({
      uid: newUID
    });
    alert('UID berhasil ditambahkan!');
  } else {
    alert('Mohon masukkan UID.');
  }
}

// Menampilkan UID yang terdaftar di list
database.ref('UIDs').on('value', (snapshot) => {
  const uidList = document.getElementById('uid-list');
  uidList.innerHTML = '';
  snapshot.forEach((childSnapshot) => {
    const childData = childSnapshot.val();
    const li = document.createElement('li');
    li.textContent = childData.uid;
    uidList.appendChild(li);
  });
});

// Fungsi untuk menggerakkan servo
function moveServo(angle) {
  database.ref('Servo/').set({
    position: angle
  });
  alert('Servo bergerak ke ' + angle + ' derajat!');
}
