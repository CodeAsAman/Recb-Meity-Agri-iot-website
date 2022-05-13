
const firebaseConfig = {
  apiKey: "AIzaSyBoLSCIsIOGkjbm8Jrenfex2B7k-kzImlQ",
  authDomain: "recbmeity.firebaseapp.com",
  databaseURL:"https://recbmeity-default-rtdb.firebaseio.com/",
  projectId: "recbmeity",
  storageBucket: "recbmeity.appspot.com",
  messagingSenderId: "296109791821",
  appId: "1:296109791821:web:695681bfdf52b4933a9a04"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// FARM 1 STARTED FOR GRAM 

let dbRef1 = firebase.database().ref("Gram/Humidity");

dbRef1.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value1").innerHTML = z;
})

let dbRef2 = firebase.database().ref("Gram/Nitrogen");
dbRef2.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value2").innerHTML = z;
})

let dbRef3 = firebase.database().ref("Gram/Ph Value");
dbRef3.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value3").innerHTML = z;
})

let dbRef4 = firebase.database().ref("Gram/Phosphorous");
dbRef4.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value4").innerHTML = z;
}) 

let dbRef5 = firebase.database().ref("Gram/Potassium");

dbRef5.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value5").innerHTML = z;
})

let dbRef6 = firebase.database().ref("Gram/Soil_Moisture");
dbRef6.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value6").innerHTML = z;
})

let dbRef7 = firebase.database().ref("Gram/Soil_Temperature");
dbRef7.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value7").innerHTML = z;

})

let dbRef8 = firebase.database().ref("Gram/Temperature");
dbRef8.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("gram_value8").innerHTML = z;
})

// FARM 1 ENDED FOR GRAM 

// FARM 2 STARTED FOR TOMATO
let dbRef9 = firebase.database().ref("Tomato/Humidity");

dbRef9.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value1").innerHTML = z;
})

let dbRef10 = firebase.database().ref("Tomato/Nitrogen");
dbRef10.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value2").innerHTML = z;
})

let dbRef11 = firebase.database().ref("Tomato/Ph Value");
dbRef11.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value3").innerHTML = z;
})

let dbRef12 = firebase.database().ref("Tomato/Phosphorous");
dbRef12.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value4").innerHTML = z;
}) 

let dbRef13 = firebase.database().ref("Tomato/Potassium");

dbRef13.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value5").innerHTML = z;
})

let dbRef14 = firebase.database().ref("Tomato/Soil_Moisture");
dbRef14.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value6").innerHTML = z;
})

let dbRef15 = firebase.database().ref("Tomato/Soil_Temperature");
dbRef15.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value7").innerHTML = z;

})

let dbRef16 = firebase.database().ref("Tomato/Temperature");
dbRef16.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("tom_value8").innerHTML = z;
})
// FARM 2 ENDED FOR TOMATO

// FARM 3 STARTED FOR BOTTLEGUARD
let dbRef17 = firebase.database().ref("Bottleguard/Humidity");

dbRef17.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value1").innerHTML = z;
})

let dbRef18 = firebase.database().ref("Bottleguard/Nitrogen");
dbRef18.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value2").innerHTML = z;
})

let dbRef19 = firebase.database().ref("Bottleguard/Ph Value");
dbRef19.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value3").innerHTML = z;
})

let dbRef20 = firebase.database().ref("Bottleguard/Phosphorous");
dbRef20.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value4").innerHTML = z;
}) 

let dbRef21 = firebase.database().ref("Bottleguard/Potassium");

dbRef21.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value5").innerHTML = z;
})

let dbRef22 = firebase.database().ref("Bottleguard/Soil_Moisture");
dbRef22.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value6").innerHTML = z;
})

let dbRef23 = firebase.database().ref("Bottleguard/Soil_Temperature");
dbRef23.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value7").innerHTML = z;

})

let dbRef24 = firebase.database().ref("Bottleguard/Temperature");
dbRef24.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bt_value8").innerHTML = z;
})
// FARM 3 ENDED FOR BOTTLEGUARD

// FARM 4 STARTED FOR CHILLI
let dbRef25 = firebase.database().ref("Chilli/Humidity");

dbRef25.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value1").innerHTML = z;
})

let dbRef26 = firebase.database().ref("Chilli/Nitrogen");
dbRef26.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value2").innerHTML = z;
})

let dbRef27 = firebase.database().ref("Chilli/Ph Value");
dbRef27.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value3").innerHTML = z;
})

let dbRef28 = firebase.database().ref("Chilli/Phosphorous");
dbRef28.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value4").innerHTML = z;
}) 

let dbRef29 = firebase.database().ref("Chilli/Potassium");

dbRef29.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value5").innerHTML = z;
})

let dbRef30 = firebase.database().ref("Chilli/Soil_Moisture");
dbRef30.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value6").innerHTML = z;
})

let dbRef31 = firebase.database().ref("Chilli/Soil_Temperature");
dbRef31.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value7").innerHTML = z;

})

let dbRef32 = firebase.database().ref("Chilli/Temperature");
dbRef32.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("ch_value8").innerHTML = z;
})
// FARM 4 ENDED FOR CHILLI

// FARM 5 STARTED FOR BRINJAL
let dbRef33 = firebase.database().ref("Brinjal/Humidity");

dbRef33.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value1").innerHTML = z;
})

let dbRef34 = firebase.database().ref("Brinjal/Nitrogen");
dbRef34.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value2").innerHTML = z;
})

let dbRef35 = firebase.database().ref("Brinjal/Ph Value");
dbRef35.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value3").innerHTML = z;
})

let dbRef36 = firebase.database().ref("Brinjal/Phosphorous");
dbRef36.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value4").innerHTML = z;
}) 

let dbRef37 = firebase.database().ref("Brinjal/Potassium");

dbRef37.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value5").innerHTML = z;
})

let dbRef38 = firebase.database().ref("Brinjal/Soil_Moisture");
dbRef38.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value6").innerHTML = z;
})

let dbRef39 = firebase.database().ref("Brinjal/Soil_Temperature");
dbRef39.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value7").innerHTML = z;

})

let dbRef40 = firebase.database().ref("Brinjal/Temperature");
dbRef40.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("bri_value8").innerHTML = z;
})
// FARM 5 ENDED FOR BRINJAL


// FARM 6 STARTED FOR PUMPKIN
let dbRef41 = firebase.database().ref("Pumpkin/Humidity");

dbRef41.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value1").innerHTML = z;
})
let dbRef42 = firebase.database().ref("Pumpkin/Nitrogen");
dbRef42.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value2").innerHTML = z;
})

let dbRef43 = firebase.database().ref("Pumpkin/Ph Value");
dbRef43.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value3").innerHTML = z;
})

let dbRef44 = firebase.database().ref("Pumpkin/Phosphorous");
dbRef44.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value4").innerHTML = z;
}) 

let dbRef45 = firebase.database().ref("Pumpkin/Potassium");

dbRef45.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value5").innerHTML = z;
})

let dbRef46 = firebase.database().ref("Pumpkin/Soil_Moisture");
dbRef46.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value6").innerHTML = z;
})

let dbRef47 = firebase.database().ref("Pumpkin/Soil_Temperature");
dbRef47.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value7").innerHTML = z;

})

let dbRef48 = firebase.database().ref("Pumpkin/Temperature");
dbRef48.on("value", function(snapshot){
  let z = snapshot.val();
  document.getElementById("pk_value8").innerHTML = z;
})
// FARM 6 ENDED FOR PUMPKIN