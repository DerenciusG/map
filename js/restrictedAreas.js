// --------- Restricted areas ----------
// ULR106
// 543312N 0215655E –543518N 0220218E –543758N 0221005E –543813N 0224051E –542810N 0223230E
// [54.55333333, 21.94861111] – [54.58833333, 22.03833333] – [54.63277778, 22.16805556] – [54.63694444, 22.68083333] – [54.46944444, 22.54166667]
// 1200AGL/300AGL
let ra1 = L.polygon([
  [54.55333333, 21.94861111],
  [54.58833333, 22.03833333],
  [54.63277778, 22.16805556],
  [54.63694444, 22.68083333],
  [54.46944444, 22.54166667]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR106</b><br><u>1200 AGL</u><br>300AGL");
// ULR109
// 545119N 0225142E –545059N 0222952E –543759N 0221122E –543813N0224442E ST BR 545119N0225142E
// [54.85527778, 22.86166667] – [54.84972222, 22.49777778] – [54.63305556, 22.18944444] – [54.63694444, 22.74500000] st br [54.85527778, 22.86166667]
// FL1200/GND
let ra2 = L.polygon([
  [54.85527778, 22.86166667],
  [54.84972222, 22.49777778],
  [54.63305556, 22.18944444],
  [54.63694444, 22.745],
  [54.85527778, 22.86166667]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR109</b><br><u>FL1200</u><br>GND");
// ULR107
// 544734N0210620E–544755N0212629E then clockwise by arc of a circle radius of 11 KMcentred at 544159N 0212652E to:543633N0213100E–543206N0211232E then clockwise by arc of a circle radius of 15 KMcentred at 543929N 0210652E to:544734N0210620E
// [54.79277778, 21.10555556] – [54.79861111, 21.44138889] then clockwise by arc of a circle radius of 11 KMcentred at [54.69972222, 21.44777778] to [54.60916667, 21.51666667] – [54.53500000, 21.20888889] then clockwise by arc of a circle radius of 15 KMcentred at [54.65805556, 21.11444444] to [54.79277778, 21.10555556]
// FL1200/GND
let ra3 = L.polygon([
  [54.79277778, 21.10555556],
  [54.79861111, 21.44138889],
  [54.69972222, 21.44777778],
  [54.60916667, 21.51666667],
  [54.535, 21.20888889],
  [54.65805556, 21.11444444],
  [54.79277778, 21.10555556]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR107</b><br><u>FL1200</u><br>GND");
// ULR2
// 542732N 0214224E – 542356N 0214634E – 542731N 0215538E – 543106N 0215131E – 542732N 0214224E
// [54.45888889, 21.70666667] – [54.39888889, 21.77611111] – [54.45861111, 21.92722222] – [54.51833333, 21.85861111] – [54.45888889, 21.70666667]
// FL4250/GND
let ra4 = L.polygon([
  [54.45888889, 21.70666667],
  [54.39888889, 21.77611111],
  [54.45861111, 21.92722222],
  [54.51833333, 21.85861111],
  [54.45888889, 21.70666667]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR2</b><br><u>FL4250</u><br>GND");
// ULR115
// A circle radius of 1KM centred at 544144N0211434E
// [54.69555556, 21.24277778]
// 100 AGL/GND
let ra5 = L.circle([54.69555556, 21.24277778], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR1884
// A circle radius of 1.5KM centred at 545614N 0220955E
// [54.93722222, 22.16527778]
// 600 AGL/GND
let ra6 = L.circle([54.93722222, 22.16527778], { radius: 1500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("600 AGL/GND");
// ULR112
// A circle radius of 1.5 KM centred at 542431N 0202852E
// [54.40861111, 20.48111111]
// 100 AGL/GND
let ra7 = L.circle([54.40861111, 20.48111111], { radius: 1500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR119
// A circle radius of 0.5KM centred at 543800N0195500E
// [54.63333333, 19.91666667]
// 100 AGL/GND
let ra8 = L.circle([54.63333333, 19.91666667], { radius: 500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR1862
// 550959N 0201500E –550600N 0201500E –550128N 0201000E –550123N 0195901E then anticlockwise by arc of a circle radius of 10 KMcentred at 545600N 0195900Eto:545600N 0194939E –544600N 0194935E –544600N 0193538E then along the state border to:550959N0201500E
// [55.16638889, 20.25000000] – [55.11638889, 20.25000000] – [55.02444444, 20.16666667] – [55.02305556, 19.98361111] then anticlockwise by arc of a circle radius of 10 KMcentred at [54.93333333, 19.82750000] – [54.76666667, 19.82638889] – [54.76666667, 19.59388889] then along the state border to [55.16638889, 20.25000000]
// 18000 AGL/GND
// L.polygon([
//   [55.16638889, 20.25],
//   [55.11638889, 20.25],
//   [55.02444444, 20.16666667],
//   [55.02305556, 19.98361111],
//   [55.16, 20.0],
//   [54.93333333, 19.8275],
//   [54.76666667, 19.82638889],
//   [54.76666667, 19.59388889],
//   [55.16638889, 20.25]
// ])
//   .setStyle({ color: "red", fillColor: "red" })
//   .addTo(mymap)
//   .bindPopup("<b>ULR1862</b><br><u>18000 AGL</u><br>GND");
// ULR108
// 545400N 0195548E –545400N 0195215E –545945N 0195215E –545945N 0200000E –545738N 0200000E then along the coastline to:545400N0195548E
// [54.90000000, 19.93000000] – [54.90000000, 19.87083333] – [54.99583333, 19.87083333] – [54.99583333, 20.00000000] – [54.96055556, 20.00000000] then along the coastline to [54.90000000, 19.93000000]
// FL1200/ GND
let ra9 = L.polygon([
  [54.9, 19.93],
  [54.9, 19.87083333],
  [54.99583333, 19.87083333],
  [54.99583333, 20.0],
  [54.96055556, 20.0],
  [54.9, 19.93]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR108</b><br><u>FL1200</u><br>GND");
// ULR10
// A circle radius of 1 KM centred at 545604N 0195856E
// [54.93444444, 19.98222222]
// 200 AGL/GND
let ra10 = L.circle([54.93444444, 19.98222222], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("200 AGL/GND");
// ULR9
// A circle radius of 3 KM centred at 545032N 0202122E
// [54.84222222, 20.35611111]
// 100 AGL/GND
let ra11 = L.circle([54.84222222, 20.35611111], { radius: 3000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR112
// A circle radius of 1.5 KM centred at 542431N 0202852E
// [54.40861111, 20.48111111]
// 100 AGL/GND
let ra12 = L.circle([54.40861111, 20.48111111], { radius: 1500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR113
// A circle radius of 1KM centred at 544955N0202917E
// [54.83194444, 20.48805556]
// 100 AGL/GND
let ra13 = L.circle([54.83194444, 20.48805556], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR114
// A circle radius of 1KM centredat 544947N0203008E
// [54.82972222, 20.50222222]
// 100 AGL/GND
let ra14 = L.circle([54.82972222, 20.50222222], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR111
// A circle radius of 1 KM centred at 544940N 0203308E
// [54.82777778, 20.55222222]
// 100 AGL/GND
let ra15 = L.circle([54.82777778, 20.55222222], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR116
// A circle radius of 1.5KM centred at 544538N0201022E
// [54.76055556, 20.17277778]
// 100 AGL/GND
let ra16 = L.circle([54.76055556, 20.17277778], { radius: 1500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR123
// A circle radius of 3KM centred at 544521N0200724E
// [54.75583333, 20.12333333]
// 500 AGL/GND
let ra17 = L.circle([54.75583333, 20.12333333], { radius: 3000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("500 AGL/GND");
// ULR117
// A circle radius of 1.5KM centred at 544339N0201025E
// [54.72750000, 20.17361111]
// 100 AGL/GND
let ra18 = L.circle([54.7275, 20.17361111], { radius: 1500 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR118
// A circle radius of 1KM centred at 544026N0200452E
// [54.67388889, 20.08111111]
// 100 AGL/GND
let ra19 = L.circle([54.67388889, 20.08111111], { radius: 1000 })
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("100 AGL/GND");
// ULR6
// 544000N 0201758E – 544115N 0202510E then clockwise by arc of a circle radius of 16 KM centred at 543259N 0202922E to 542435N 0202555E – 542527N 0201909E then clockwise by arc of a circle radius of 14 KM centred at 543249N 0202202E to 544000N 0201758E
// [54.66666667, 20.29944444] – [54.68750000, 20.41944444] then clockwise by arc of a circle radius of 16 KM centred at [54.54972222, 20.48944444] to [54.40972222, 20.43194444] – [54.42416667, 20.31916667]  then clockwise by arc of a circle radius of 14 KM centred [54.54694444, 20.36722222]  to [54.66666667, 20.29944444]
// FL1200/200 AMSL
let ra20 = L.polygon([
  [54.66666667, 20.29944444],
  [54.6875, 20.41944444],
  [54.54972222, 20.48944444],
  [54.40972222, 20.43194444],
  [54.42416667, 20.31916667],
  [54.54694444, 20.36722222],
  [54.66666667, 20.29944444]
])
  .setStyle({ color: "red", fillColor: "red" })
  .bindPopup("<b>ULR6</b><br><u>FL1200</u><br>200 AMSL");

let raGroup = L.layerGroup([
  ra1,
  ra2,
  ra3,
  ra4,
  ra5,
  ra6,
  ra7,
  ra8,
  ra9,
  ra10,
  ra11,
  ra12,
  ra13,
  ra14,
  ra15,
  ra16,
  ra17,
  ra18,
  ra19,
  ra20
]);
