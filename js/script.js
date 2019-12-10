// Map init
var mymap = L.map("mapid").setView([54.7104, 20.4522], 7);
L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    accessToken:
      "pk.eyJ1IjoiYnJvbml1c25hY2h1aSIsImEiOiJjazNybDc4dGcwY2hsM29wYzE1bnZ1Ymt2In0.4l0ndAdlp7YhgPRDR7FErQ"
  }
).addTo(mymap);

// ------ Custom icons ----
var triangleIcon = L.icon({
  iconUrl: "./images/triangle.png",
  iconSize: [16, 16]
});
var dmeIcon = L.icon({
  iconUrl: "./images/DME.png",
  iconSize: [30, 30]
});
var vorIcon = L.icon({
  iconUrl: "./images/VOR.png",
  iconSize: [30, 30]
});
var airportIcon = L.icon({
  iconUrl: "./images/airport.png",
  iconSize: [16, 16]
});

// Kaliningrad/KhrabrovoCTR
let ctr = L.polygon([
  [55.01277778, 20.61611111],
  [55.0, 20.75],
  [54.91444444, 20.83638889],
  [54.85888889, 20.58472222],
  [54.80888889, 20.34083333],
  [54.895, 20.27083333],
  [54.97222222, 20.15166667],
  [55.01277778, 20.61611111]
])
  .setStyle({
    color: "black",
    fillColor: "rgba(0,0,0,.5)",
    dashArray: "10, 10",
    dashOffset: "0"
  })
  .bindPopup("Kaliningrad/KhrabrovoCTR");

// ---- DME ----
// DME 06 545315.7N 0203441.4E [54.88750000, 20.57777778]
let dme1 = L.marker([54.8875, 20.57777778], { icon: dmeIcon }).bindPopup(
  "<b>DME 06</b><br>545315.7N 0203441.4E"
);
// DME 24 545351.5N 0203659.4E [54.89750000, 20.61638889]
let dme2 = L.marker([54.8975, 20.61638889], { icon: dmeIcon }).bindPopup(
  "<b>DME 24</b><br>545351.5N 0203659.4E"
);

// VOR
// Kalilingrad/Khrabrovo VORDME, ID:KRD, frequency: 117.05, coordinates: 545336N 0203559E [ 54.89333333, 20.59972222], DME elevation: 30, hours of operation: H24.
let vor = L.marker([54.89333333, 20.59972222], { icon: vorIcon }).bindPopup(
  "<b>Kalilingrad/Khrabrovo VORDME</b><br>ID:KRD, frequency: 117.05, coordinates: 545336N 0203559E, DME elevation: 30, hours of operation: H24."
);

// Aerodrome
// UMKK KALININGRAD/Kharabrovo airport 545330N 0203555E [54.89166667, 20.59833333]
let airport = L.marker([54.89166667, 20.59833333], {
  icon: airportIcon
}).bindPopup("<b>UMKK KALININGRAD/Kharabrovo airport</b><br>545330N 0203555E");

let ctrGroup = L.layerGroup([ctr]);
let dmeGroup = L.layerGroup([dme1, dme2]);
let vorGroup = L.layerGroup([vor]);
let airportGroup = L.layerGroup([airport]);
