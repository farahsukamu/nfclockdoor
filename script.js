<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>RFID UID Manager</title>
</head>
<body>
  <!-- Bagian HTML Anda -->
  <input type="text" id="new-uid" placeholder="Masukkan UID baru">
  <button onclick="addUID()">Tambah UID</button>
  <ul id="uid-list"></ul>

  <!-- Menambahkan Firebase Script di index.html -->
  <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"></script>

  <!-- Tambahkan file eksternal script.js -->
  <script src="script.js"></script>
</body>
</html>
