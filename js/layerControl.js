let overlays = {
  FIR: firGroup,
  TMA: tmaGroup,
  Waypoints: waypointsGroup,
  Airways: airwaysGroup,
  "Prohibited Areas": paGroup,
  "Danger Areas": daGroup,
  "Restricted Areas": raGroup,
  CTR: ctrGroup,
  DME: dmeGroup,
  VOR: vorGroup,
  Airport: airportGroup
};

L.control.layers(null, overlays).addTo(mymap);
