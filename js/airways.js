// ------- Airways --------

var pointList = [
  // BALIT
  [
    new L.LatLng(55.81027778, 19.09111111),
    new L.LatLng(55.93166667, 17.70166667)
  ],
  [new L.LatLng(55.81027778, 19.09111111), new L.LatLng(55.6975, 17.78555556)],
  [
    new L.LatLng(55.81027778, 19.09111111),
    new L.LatLng(55.58444444, 17.95888889)
  ],
  [
    new L.LatLng(55.81027778, 19.09111111),
    new L.LatLng(55.50277778, 18.72944444)
  ],
  [new L.LatLng(55.81027778, 19.09111111), new L.LatLng(55.53388889, 19.05)],
  // LATMI
  [
    new L.LatLng(55.44861111, 18.16722222),
    new L.LatLng(55.50277778, 18.72944444)
  ],
  [new L.LatLng(55.44861111, 18.16722222), new L.LatLng(55.15, 20.32166667)],
  // KUNER
  [
    new L.LatLng(55.25861111, 18.44805556),
    new L.LatLng(55.50277778, 18.72944444)
  ],
  [
    new L.LatLng(55.25861111, 18.44805556),
    new L.LatLng(55.52194444, 18.92111111)
  ],
  [
    new L.LatLng(55.25861111, 18.44805556),
    new L.LatLng(55.60361111, 19.83833333)
  ],
  // OLMOR && OKPAN
  [
    new L.LatLng(55.50277778, 18.72944444),
    new L.LatLng(55.52194444, 18.92111111)
  ],
  [new L.LatLng(55.52194444, 18.92111111), new L.LatLng(55.53388889, 19.05)],
  [
    new L.LatLng(55.52194444, 18.92111111),
    new L.LatLng(55.74472222, 19.32916667)
  ],
  // GAREK && RANOK
  [new L.LatLng(55.53388889, 19.05), new L.LatLng(55.60361111, 19.83833333)],
  [new L.LatLng(55.53388889, 19.05), new L.LatLng(54.91277778, 18.95833333)],
  [
    new L.LatLng(54.91277778, 18.95833333),
    new L.LatLng(55.60361111, 19.83833333)
  ],
  [
    new L.LatLng(54.91277778, 18.95833333),
    new L.LatLng(55.20138889, 19.63416667)
  ],
  [new L.LatLng(54.91277778, 18.95833333), new L.LatLng(54.9, 19.6)],
  // TIGNU – ABNAB B74 25 NM [55.60361111, 19.83833333] [55.20138889, 19.63416667]
  [
    new L.LatLng(55.60361111, 19.83833333),
    new L.LatLng(55.20138889, 19.63416667)
  ],
  // TIGNU – PELUG G720 32 NM [55.60361111, 19.83833333] [55.15000000, 20.32166667]
  [new L.LatLng(55.60361111, 19.83833333), new L.LatLng(55.15, 20.32166667)],
  // OTVOV – ABNAB R239 28 NM [55.47444444, 20.29166667] [55.20138889, 19.63416667]
  [
    new L.LatLng(55.47444444, 20.29166667),
    new L.LatLng(55.20138889, 19.63416667)
  ],
  // TARUN –IRBAD B120 25 NM  [54.90000000, 19.60000000] [54.89583333, 20.30916667]
  [new L.LatLng(54.9, 19.6), new L.LatLng(54.89583333, 20.30916667)],
  // GOMED – IRBAD B704 35 NM [54.44777778, 19.65416667] [54.89583333, 20.30916667]
  [
    new L.LatLng(54.44777778, 19.65416667),
    new L.LatLng(54.89583333, 20.30916667)
  ],
  // GOMED – URAMA R801 15 NM [54.44777778, 19.65416667] [54.60833333, 19.99000000]
  [new L.LatLng(54.44777778, 19.65416667), new L.LatLng(54.60833333, 19.99)],
  // GOMED – RUTAM G354 36 NM [54.44777778, 19.65416667] [54.62000000, 20.65000000]
  [new L.LatLng(54.44777778, 19.65416667), new L.LatLng(54.62, 20.65)],
  // IRBAD – REPMI B704 15 NM  [54.89583333, 20.30916667] [55.24500000, 20.58138889]
  [new L.LatLng(54.89583333, 20.30916667), new L.LatLng(55.245, 20.58138889)],
  // PELUG – ASNIG B489 31 NM [55.15000000, 20.32166667] [55.14583333, 21.21638889]
  [new L.LatLng(55.15, 20.32166667), new L.LatLng(55.14583333, 21.21638889)],
  // AGONA – TURIP A716 5 NM [55.40000000, 20.55333333] [55.31166667, 20.56000000]
  [new L.LatLng(55.4, 20.55333333), new L.LatLng(55.31166667, 20.56)],
  // TURIP – REPMI A716 14 NM  [55.31166667, 20.56000000] [55.24500000, 20.58138889]
  [new L.LatLng(55.31166667, 20.56), new L.LatLng(55.245, 20.58138889)],
  // NERIG – REPMI B704 18 NM [55.30000000, 20.91666667] [55.24500000, 20.58138889]
  [new L.LatLng(55.3, 20.91666667), new L.LatLng(55.245, 20.58138889)],
  // GITOV – RUTAM A716 15 NM [54.36833333, 20.69833333] [54.62000000, 20.65000000]
  [new L.LatLng(54.36833333, 20.69833333), new L.LatLng(54.62, 20.65)],
  // RUTAM – NEDRA G354 18 NM [54.62000000, 20.65000000] [54.70000000, 21.14500000]
  [new L.LatLng(54.62, 20.65), new L.LatLng(54.7, 21.145)],
  // NEDRA – BENAL G354 18 NM [54.70000000, 21.14500000] [54.77833333, 21.64333333]
  [new L.LatLng(54.7, 21.145), new L.LatLng(54.77833333, 21.64333333)],
  // NEDRA – GOLAD G720 42 NM [54.70000000, 21.14500000] [54.33333333, 22.17500000]
  [new L.LatLng(54.7, 21.145), new L.LatLng(54.33333333, 22.175)],
  // GOLAD – RUSNE L747 60 NM [54.33333333, 22.17500000] [55.23527778, 21.43805556]
  [new L.LatLng(54.33333333, 22.175), new L.LatLng(55.23527778, 21.43805556)],

  // GOLAD – KRAKI M159 42 NM [54.33333333, 22.17500000] [54.94138889, 22.73472222]
  [new L.LatLng(54.33333333, 22.175), new L.LatLng(54.94138889, 22.73472222)],
  // LAKOD – BENAL A926 39 NM [54.65166667, 22.75500000] [54.77833333, 21.64333333]
  [new L.LatLng(54.65166667, 22.755), new L.LatLng(54.77833333, 21.64333333)],
  // KRAKI – BENAL G354 39 NM [54.94138889, 22.73472222] [54.77833333, 21.64333333]
  [
    new L.LatLng(54.94138889, 22.73472222),
    new L.LatLng(54.77833333, 21.64333333)
  ],
  // KRAKI – RILEP B120 51 NM [54.94138889, 22.73472222] [54.90472222, 21.25888889]
  [
    new L.LatLng(54.94138889, 22.73472222),
    new L.LatLng(54.90472222, 21.25888889)
  ],
  // BENAL – NIFAL A926 15 NM  [54.77833333, 21.64333333] [54.82750000, 21.21416667]
  [new L.LatLng(54.77833333, 21.64333333), new L.LatLng(54.8275, 21.21416667)],
  // ITVUL – ASNIG B489 17 NM [55.14083333, 21.71666667] [55.14583333, 21.21638889]
  [
    new L.LatLng(55.14083333, 21.71666667),
    new L.LatLng(55.14583333, 21.21638889)
  ],
  // RUSNE – ASNIG R801 9 NM [55.23527778, 21.43805556] [55.14583333, 21.21638889]
  [
    new L.LatLng(55.23527778, 21.43805556),
    new L.LatLng(55.14583333, 21.21638889)
  ],
  // KALILINGRAD – RUTAM A716 17 NM [54.62000000, 20.65000000] [54.89166667, 20.59833333]
  [new L.LatLng(54.62, 20.65), new L.LatLng(54.89166667, 20.59833333)],
  // KALILINGRAD – URAMA R801 28 NM [54.89166667, 20.59833333] [54.60833333, 19.99000000]
  [new L.LatLng(54.89166667, 20.59833333), new L.LatLng(54.60833333, 19.99)],
  // KALILINGRAD – IRBAD B120 10 NM [54.89583333, 20.30916667] [54.89166667, 20.59833333]
  [
    new L.LatLng(54.89583333, 20.30916667),
    new L.LatLng(54.89166667, 20.59833333)
  ],
  // KALILINGRAD – PELUG G720 18 NM [55.15000000, 20.32166667] [54.89166667, 20.59833333]
  [new L.LatLng(55.15, 20.32166667), new L.LatLng(54.89166667, 20.59833333)],
  // KALILINGRAD – REPMI A716 11 NM [55.24500000, 20.58138889] [54.89166667, 20.59833333]
  [new L.LatLng(55.245, 20.58138889), new L.LatLng(54.89166667, 20.59833333)],
  // KALILINGRAD -  NERIG B67 27 NM [55.30000000, 20.91666667] [54.89166667, 20.59833333]
  [new L.LatLng(55.3, 20.91666667), new L.LatLng(54.89166667, 20.59833333)],
  // KALILINGRAD – ASNIG R801 26 NM [54.89166667, 20.59833333] [55.14583333, 21.21638889]
  [
    new L.LatLng(54.89166667, 20.59833333),
    new L.LatLng(55.14583333, 21.21638889)
  ],
  // KALILINGRAD -  RILEP B120 23 NM [54.89166667, 20.59833333] [54.90472222, 21.25888889]
  [
    new L.LatLng(54.89166667, 20.59833333),
    new L.LatLng(54.90472222, 21.25888889)
  ],
  // KALILINGRAD – NIFAL A926 22 NM [54.89166667, 20.59833333] [54.82750000, 21.21416667]
  [new L.LatLng(54.89166667, 20.59833333), new L.LatLng(54.8275, 21.21416667)],
  // KALILINGRAD – NEDRA G720 22 NM [54.70000000, 21.14500000] [54.89166667, 20.59833333]
  [new L.LatLng(54.7, 21.145), new L.LatLng(54.89166667, 20.59833333)],
  // IPLIT - ABNAB
  [
    new L.LatLng(54.63777778, 19.35555556),
    new L.LatLng(55.20138889, 19.63416667)
  ]
];
var pointTitles = [
  "A945  47 NM",
  "R356 45 NM",
  "R235 41 NM",
  "G805 22 NM",
  "G818  17 NM",
  "B65 19 NM",
  "B489 76 NM",
  "G805 18 NM",
  "B810 23 NM",
  "B709 52 NM",
  "B65 6 NM",
  "B65  4 NM",
  "B810 19 NM",
  "B65 27 NM",
  "G818  37 NM",
  "B73  51 NM",
  "R239 29 NM",
  "B120 22 NM",
  "B74 25 NM",
  "G720 32 NM",
  "R239 28 NM",
  "B120 25 NM",
  "B704 35 NM",
  "R801 15 NM",
  "G354 36 NM",
  "B704 15 NM",
  "B489 31 NM",
  "A716 5 NM",
  "A716 14 NM",
  "B704 18 NM",
  "A716 15 NM",
  "G354 18 NM",
  "G354 18 NM",
  "G720 42 NM",
  "L747 60 NM",
  "M159 42 NM",
  "A926 39 NM",
  "G354 39 NM",
  "B120 51 NM",
  "A926 15 NM",
  "B489 17 NM",
  "R801 9 NM",
  "A716 17 NM",
  "R801 28 NM",
  "B120 10 NM",
  "G720 18 NM",
  "A716 11 NM",
  "B67 27 NM",
  "R801 26 NM",
  "B120 23 NM",
  "A926 22 NM",
  "G720 22 NM",
  "B74 35 NM"
];

let tempGroup = [];

pointList.map((point, index) => {
  var firstpolyline = new L.Polyline(point, {
    color: "black",
    weight: 3,
    opacity: 1,
    smoothFactor: 1
  });
  tempGroup.push(firstpolyline.bindPopup(pointTitles[index]));
});

let airwaysGroup = L.layerGroup(tempGroup);