console.log("Welcome to Plaestine Website");
console.log("If You Are Watching Console For Error Dont wory");
console.log("See Console Errors Se Pak Sasf")

const cityRoutes = {
  "palestine": "/Palestine/palestine.html",
  "israel": "/Israel/israel.html",
  "israel attack at palestine": "/IsraelAttackOnPalestine/Attack1948.html",
  "hamas":"/Hammaz-&-israel-War/Hammaz-Attack-On-Israel.html",

  "my profile":"/Profile/profile.html",
  "palestine cities": "/PC/PC.html",
  "history of israel": "/Israel/History/History.html",
  "dream of israel" :"/Israel/Dream-of-israel/Dream-of-israel.html",
  "israel army":"/Israel/Israel-Army/Israel-Army.html",
  "israel militry": "/Israel/Israel-Army/Militry/Militory.html",
  "israel panzers": "/Israel/Israel-Army/Panzers/Panzer.html",
  "israel fighterjet": "/Israel/Israel-Army/Fighterjets/Fighterjet.html",
  "israel helicopter": "/Israel/Israel-Army/Helicopters/Helicopters.html",
  "israel uav": "/Israel/Israel-Army/UAV-Aircraft/UAV-Aircraft.html",

  "israel attack at palestine": "/IsraelAttackOnPalestine/Attack1948.html",
  "hamas":"/Hammaz-&-israel-War/Hammaz-Attack-On-Israel.html",
  "history of hamas":"/Hammaz-&-israel-War/Hamas/Hamas.html",
  "hamas army":"/Hammaz-&-israel-War/Hamas-Army/Hamas-Army.html",
  "hamas and israel war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Hammas-VS-israel/Hammas-VS-israel.html",

  "history of palestine":"/IsraelAttackOnPalestine/History-of-palestine/History.html",
  "history of palestine":"/IsraelAttackOnPalestine/History-of-palestine/Established/Established.html",
  "How Yahodies make israel":"/IsraelAttackOnPalestine/History-of-palestine/Y-Make-Israel/Make-Isreal.html",

  "palestine cities": "/IsraelAttackOnPalestine/PC/PC.html",
  "beit jala": "/IsraelAttackOnPalestine/PC/Cities/Beit-Jala/Beit-Jala.html",
  "beit sahour":"/IsraelAttackOnPalestine/PC/Cities/Beit-Sahour/Beit-Sahour.html",
  "bethlehem":"/IsraelAttackOnPalestine/PC/Cities/Bethlehem/Bethlehem.html",
  "gaza":"/IsraelAttackOnPalestine/PC/Cities/Gaza/Gaza.html",
  "hebron":"/IsraelAttackOnPalestine/PC/Cities/Hebron/Hebron.html",
  "jenin":"/IsraelAttackOnPalestine/PC/Cities/Jenin/Jenin.html",
  "jericho":"/IsraelAttackOnPalestine/PC/Cities/Jericho/Jericho.html",
  "jerusalem":"/IsraelAttackOnPalestine/PC/Cities/Jerusalem/Jerusalem.html",
  "khan younis":"/IsraelAttackOnPalestine/PC/Cities/Khan-Younis/Khan-Younis.html",
  "nablus":"/IsraelAttackOnPalestine/PC/Cities/Nablus/Nablus.html",
  "rafah":"/IsraelAttackOnPalestine/PC/Cities/Rafah/Rafah.html",
  "ramallah":"/IsraelAttackOnPalestine/PC/Cities/Ramallah-&-El-Bireh/Ramallah-&-El-Bireh.html",
  "tulkarem":"/IsraelAttackOnPalestine/PC/Cities/Tulkarem/Tulkarem.html",


  "all wars":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2022.html",
  "1948 to 2024 all war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/War.html",
  "battle of karameh":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Battle-of-Karameh/Battle-of-Karameh.html",
  "black september":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Black-September/Black-September.html",
  "fatah hamas conflict":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Fatah-Hamas-conflict/Fatah-Hamas-conflict.html",
  "fedayeen war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/fedayeen-war/fedayeen-war.html",
  "first intifada":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/First-Intifada/First-Intifada.html",
  "gaza israel war 2012":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Gaza-Israel-2012/Gaza-Israel-2012.html",
  "gaza israel war 2008":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Gaza-War-2008/Gaza-War-2008.html",
  "israel arab war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/israel-Arab-War-1948/israel-Arab-War-1948.html",
  "israel gaza conflict":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Israel-Gaza-conflict-2014/Israel-Gaza-conflict-2014.html",
  "israeli operation":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Israeli-Operation-2012/Israeli-Operation-2012.html",
  "israeli raid":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Israeli-Raid/Israeli-Raid.html",
  "israel palestine crisis":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Israel–Palestine-Crisis-2021/Israel–Palestine-Crisis-2021.html",
  "":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Lebanese-Civil-War/Lebanese-Civil-War.html",
  "israel palestine crisis":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Israel–Palestine-Crisis-2021/Israel–Palestine-Crisis-2021.html",
  "lebanese civil war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Lebanese-Civil-War/Lebanese-Civil-War.html",
  "lebanon war":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Lebanon-War/Lebanon-War.html",
  "qibya massacre":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Qibya-massacre/Qibya-massacre.html",
  "second intifada":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/Second-Intifada/Second-Intifada.html",
  "south lebanon":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/South-Lebanon-conflict/South-Lebanon-conflict.html",
  "war of attrition":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/War-of-Attrition/War-of-Attrition.html",
  "war of camps":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Wars 1948 to 2024/War-of-Camps/War-of-Camps.html",

  

 "israel attack 2023":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Israel-Attack-2023.html",
"videos":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Missiles-Attack/Missiles-Attack.html",

"palestine Cities 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Cities.html",
"beit jala 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Beit Jala/Beit Jala.html",
"beit sahour 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Beit-Sahour/Beit-Sahour.html",
"bethlehem 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Bethlehem/Bethlehem.html",
"gaza 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Gaza/Gaza.html",
"hebron 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Hebron/Hebron.html",
"jenin 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Jenin/Jenin.html",
"jericho 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Jerichi/Jericho.html",
"jerusalem 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Jerusalem/Jerusalem.html",
"khan younis 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Khan-Younis/Khan-Younis.html",
"nablus 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Nablus/Nablus.html",
"rafah 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Rafah/Rafah.html",
"ramallah 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Ramallah/Ramallah.html",
"tulkarem 2024":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Cities/Tulkarem/Tulkarem.html",

  "palestiniane after israel attack":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/Peoples/Peoples.html",
  "injured palestinianes":"/IsraelAttackOnPalestine/israel-Attack-om-Palestine/Israel-Attack-2023/injured-Palstinianes/injured.html",

};


function handleKeyPress(event) {
  if (event.key === 'Enter') {
    searchCity();
  }
}

function searchCity() {
  const cityInput = document.getElementById('searchInput').value.toLowerCase();
  if (cityRoutes.hasOwnProperty(cityInput)) {
    const cityPageUrl = cityRoutes[cityInput];
    window.location.href = cityPageUrl;
  } else {
    alert('So Sorry Input Not Found.');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('keypress', handleKeyPress);
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', searchCity);
});
export function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  menuIcon.addEventListener('click', toggleMenu);
});



const headlines = [
  "On 15 November 1988, Palestinian National Council, the legislative body of the Palestine Liberation Organization (PLO) led by Yasser Arafat, declared the establishment of the State.The State of Palestine is a country in the southern Levant region of West Asia,Encompassing the Israeli-occupied West Bank and Gaza Strip,within the larger historic Palestine region.The country shares most of its borders with Israel, and borders Jordan to the east and Egypt to the southwest....",
  "It has a combined land area of 6,020 square kilometres (2,320 sq mi) while its population exceeds five million people. Its proclaimed capital is Jerusalem while Ramallah serves as its administrative center and Gaza City was its largest city until 2023.Arabic is the official language."
];

let currentIndex = 0;
let wordIndex = 0;
let isAdding = true;

function updateHeadline() {
  const headlineContainer = document.getElementById("headlineContainer");
  const headline = headlines[currentIndex];

  if (isAdding) {
    const partialHeadline = headline.substr(0, wordIndex + 1);
    headlineContainer.textContent = partialHeadline;
    wordIndex++;
    if (wordIndex > headline.length) {
      isAdding = false;
    }
  } else {
    const partialHeadline = headline.substr(0, wordIndex);
    headlineContainer.textContent = partialHeadline;
    wordIndex--;
    if (wordIndex < 0) {
      isAdding = true;
      currentIndex = (currentIndex + 1) % headlines.length;
    }
  }
}

setInterval(updateHeadline, 80);

const phrases = [
  'Hi How are you I am Ali Raza Narejo :) I Am Here To Assest you',
  'Welcome to My Palestine Website ',
  'Today We See About Palestine >',
  'What is Palestine ?',
  'Why it is Palestine ?',
  'Where from Plaestinianes?',  
  'What Happend With Palestine ?',
  'Why It Happend with Plaestine ?',
  'Who Attack At Palestine ?',
  'Is Israel Attact At Palestine ?',
  'Who is Israel ?',
  'Why It is Israel ?',
  'Where From Israel ?',
  'Why israel War with Palestine ?',
  'How israel Attack at Palestine ?',
  'About Israel Army ?.'
];

let index = 0;
let intervalId = null;
let timerId = null;

function typePhrase(phrase) {
  const input = document.getElementById('searchInput');
  let i = 0;
  intervalId = setInterval(function() {
    if (i <= phrase.length) {
      input.value = phrase.substring(0, i);
      i++;
    } else {
      clearInterval(intervalId);
      timerId = setTimeout(erasePhrase, 3000);
    }
  }, 100);
}

function erasePhrase() {
  const input = document.getElementById('searchInput');
  let phrase = input.value;
  let i = phrase.length;
  intervalId = setInterval(function() {
    if (i >= 0) {
      input.value = phrase.substring(0, i);
      i--;
    } else {
      clearInterval(intervalId);
      index = (index + 1) % phrases.length;
      typePhrase(phrases[index]);
    }
  }, 10);
}

function stopTyping() {
  clearInterval(intervalId);
  clearTimeout(timerId);
}

function restartTypingIfEmpty() {
  const input = document.getElementById('searchInput');
  if (input.value === '') {
    clearTimeout(timerId);
    timerId = setTimeout(startTyping, 3000);
  }
}

function startTyping() {
  index = 0;
  typePhrase(phrases[index]);
}

document.getElementById('searchButton').addEventListener('click', function() {
  stopTyping();
  searchCity();
});

document.getElementById('searchInput').addEventListener('input', function() {
  stopTyping();
  restartTypingIfEmpty();
});

document.getElementById('searchInput').addEventListener('click', function() {
  clearInterval(intervalId);
  this.value = '';
  stopTyping();
  restartTypingIfEmpty();
});

document.getElementById('searchInput').addEventListener('focus', function() {
  setTimeout(function() {
    stopTyping();
  }, 100);
});

startTyping();

export { handleKeyPress };

document.getElementById('up').addEventListener('click', function() {
  window.location.href = '/Profile/profile.html';
});



// Function to start counting from 0 to a specified value within a specific duration
function startCounting(targetElementId, targetValue, duration) {
  let count = 0;
  const element = document.getElementById(targetElementId);
  const increment = Math.ceil(targetValue / (duration / 10)); // Calculate the increment based on duration
  const interval = setInterval(() => {
    element.textContent = count;
    count += increment;
    if (count >= targetValue) {
      element.textContent = targetValue; // Set the final value
      clearInterval(interval); // Stop the counting
    }
  }, 10); // Adjust the interval for smoother animation
}

// Intersection Observer to trigger counting when the second frame comes into view
const secondFrame = document.querySelector('.frame');
let countingStarted = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countingStarted) {
      startCounting('count1', 800000, 5000); // Start counting from 0 to 300000 in 5 seconds
      startCounting('count2', 5000000, 5000); // Start counting from 0 to 20000 in 5 seconds
      startCounting('count3', 490547, 5000); // Start counting from 0 to 25000 in 5 seconds
      startCounting('count4', 240000, 5000); // Start counting from 0 to 125000 in 5 seconds
      startCounting('count5', 5490547, 5000); // Start counting from 0 to 125000 in 5 seconds
      countingStarted = true; // Mark the counting as started
      observer.unobserve(secondFrame); // Stop observing once counting starts
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the second frame is visible

if (secondFrame) {
  observer.observe(secondFrame);
}

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 1; i <= 16; i++) {
    let videoCard = document.getElementById('videoCard' + i);
    let video = document.getElementById('video' + i);
    let modal = document.getElementById('videoModal' + i);
    let modalVideo = document.getElementById('modalVideo' + i);
    let span = modal.getElementsByClassName("close")[0];

    // Function to open the modal
    video.addEventListener('click', function() {
      modal.style.display = "block";
      document.body.classList.add("blur");
      modalVideo.play();
    });

    // Function to close the modal when span (close button) is clicked
    span.onclick = function() {
      modal.style.display = "none";
      document.body.classList.remove("blur");
      modalVideo.pause();
    };

    // Function to close the modal when clicking outside the modal
    function closeModalOutside(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        document.body.classList.remove("blur");
        modalVideo.pause();
        window.removeEventListener("click", closeModalOutside);
      }
    }

    videoCard.addEventListener('click', function() {
      modal.style.display = "block";
      document.body.classList.add("blur");
      modalVideo.play();
      window.addEventListener("click", closeModalOutside);
    });

  }

});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyBU1hAfS6lBhqUEqkojudb9wxeMhfm1KSU",
  authDomain: "noted-door-402706.firebaseapp.com",
  databaseURL: "https://noted-door-402706-default-rtdb.firebaseio.com",
  projectId: "noted-door-402706",
  storageBucket: "noted-door-402706.appspot.com",
  messagingSenderId: "1061156658421",
  appId: "1:1061156658421:web:a2db8c244c8b3698f2b9bc",
  measurementId: "G-BN6E8PC088"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

document.getElementById('signOutBtn').addEventListener('click', () => {
  signOut(auth).then(() => {
    window.location.href = '/index.html'; // Redirect to the login page after sign-out
  }).catch((error) => {
    console.error('Sign Out Error', error);
  });
});

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const userDoc = doc(db, 'users', user.uid);
    const userDocSnap = await getDoc(userDoc);
    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      // document.getElementById('user_name').value = userData.username || user.displayName;
      // document.getElementById('user_email').value = user.email;
      const profileImageUrl = userData.profileImageUrl || user.photoURL || 'default-profile.png';
      // document.getElementById('profileImg').src = profileImageUrl;
      document.getElementById('user-image').src = profileImageUrl;
    } else {
      // document.getElementById('user_name').value = user.displayName;
      // document.getElementById('user_email').value = user.email;
      // document.getElementById('profileImg').src = user.photoURL || 'default-profile.png';
      document.getElementById('user-image').src = user.photoURL || 'default-profile.png';
    }
  } else {
    window.location.href = 'index.html'; // Redirect to the login page if not authenticated
  }
});

// document.getElementById('button').addEventListener('click', async () => {
//   const user = auth.currentUser;
//   if (user) {
//     const username = document.getElementById('user_name').value;
//     await updateProfile(user, { displayName: username });

//     const userDoc = doc(db, 'users', user.uid);
//     await setDoc(userDoc, { username }, { merge: true });
//   }
// });

// document.getElementById('input_file').addEventListener('change', async (event) => {
//   const user = auth.currentUser;
//   if (user) {
//     const file = event.target.files[0];
//     const storageRef = ref(storage, 'profile_images/' + user.uid);
//     await uploadBytes(storageRef, file);
//     const profileImageUrl = await getDownloadURL(storageRef);

//     await updateProfile(user, { photoURL: profileImageUrl });
//     const userDoc = doc(db, 'users', user.uid);
//     await setDoc(userDoc, { profileImageUrl }, { merge: true });

//     document.getElementById('user-image').src = profileImageUrl;
//   }
// });

