function AppCtrl(e){e.setActive=function(t){e.destinationsActive="";e.flightsActive="";e.reservationsActive="";e[t+"Active"]="active"};e.airports={PDX:{code:"PDX",name:"Portland International Airport",city:"Portland",destinations:["LAX","SFO"]},STL:{code:"STL",name:"Lambert-St. Louis International Airport",city:"St. Louis",destinations:["LAX","MKE"]},MCI:{code:"MCI",name:"Kansas City International Airport",city:"Kansas City",destinations:["LAX","DFW"]}}};