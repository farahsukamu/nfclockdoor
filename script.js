// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBU6FpDXlpesoWvfRc4ZtuM30tmW-yfiMQ",
    authDomain: "rfid-lockdoor.firebaseapp.com",
    databaseURL: "https://rfid-lockdoor-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rfid-lockdoor",
    storageBucket: "rfid-lockdoor.appspot.com",
    messagingSenderId: "877353383754",
    appId: "1:877353383754:web:d47a2692b015dd196473b3",
    measurementId: "G-8VQWLYGYZ0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the Firebase database
const database = firebase.database();

// Function to add access
function addAccess() {
    const uid = prompt("Tap your RFID card and enter the UID:"); // Replace this with actual RFID reading logic
    if (uid) {
        database.ref('UIDs/' + uid).set("Access Granted", (error) => {
            if (error) {
                alert("Error adding access: " + error.message);
            } else {
                alert("Access added successfully!");
            }
        });
    }
}

// Function to remove access
function removeAccess() {
    const uid = prompt("Enter the UID to remove access:");
    if (uid) {
        database.ref('UIDs/' + uid).remove((error) => {
            if (error) {
                alert("Error removing access: " + error.message);
            } else {
                alert("Access removed successfully!");
            }
        });
    }
}

// Function to unlock
function unlock() {
    // Move servo to position 180 for 5 seconds
    database.ref('Servo/position').set(180);
    setTimeout(() => {
        database.ref('Servo/position').set(0);
    }, 5000); // Move back to position 0 after 5 seconds
}

// Event listeners for buttons
document.getElementById("addAccessButton").addEventListener("click", addAccess);
document.getElementById("removeAccessButton").addEventListener("click", removeAccess);
document.getElementById("unlockButton").addEventListener("click", unlock);
