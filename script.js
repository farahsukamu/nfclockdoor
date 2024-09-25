// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Reference to the UID list in Firebase
const uidRef = db.ref("rfid-uids");

// Function to load UID list from Firebase
function loadUIDs() {
    uidRef.on("value", (snapshot) => {
        const uidList = document.getElementById("uid-list");
        uidList.innerHTML = ""; // Clear existing list

        snapshot.forEach((childSnapshot) => {
            const uid = childSnapshot.key;
            const li = document.createElement("li");
            li.textContent = uid;
            uidList.appendChild(li);
        });
    });
}

// Function to add new UID to Firebase
function addUID() {
    const newUID = document.getElementById("new-uid").value;
    if (newUID) {
        uidRef.child(newUID).set(true);  // Save the new UID to Firebase
        document.getElementById("new-uid").value = "";  // Clear input
    } else {
        alert("Masukkan UID terlebih dahulu");
    }
}

// Load UIDs when the page loads
window.onload = loadUIDs;
