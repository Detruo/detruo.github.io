	var data = new Date();
	var dzien = data.getDate();
	var miesiac = data.getMonth()+1;
	var rok = data.getFullYear();
	
	function oblicz (godzina1, minuta1, czas1, godzina2, minuta2, czas2){
		var time1 = godzina1 + ":" + minuta1 + " " + czas1;
		var time2 = godzina2 + ":" + minuta2 + " " + czas2;
		
		var date1 = new Date("2023/08/22 " + time1);
        var date2 = new Date("2023/08/22 " + time2);
		
		if (date2 < date1) {
          date2.setDate(date2.getDate() + 1);
        }
		
		var timeDiff = Math.abs(date2 - date1);
        var hours = Math.floor(timeDiff / 3600000);
        var minutes = Math.floor((timeDiff % 3600000) / 60000);
		if (minutes <= 9) minutes = "0" + minutes;
		
		return hours + ":" + minutes;
	}

	function Ashura(godz, min, czas){
		if ((godz >= 5 && godz < 8) && czas == "AM") return "Śpi";
		else return "Nie śpi";
	}
	
	function Ashuratime(godz, minuta, czas){
		if (Ashura(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 8, 0, "AM");
		else return "Idzie spać za - " + oblicz(godz, minuta, czas, 5, 0, "AM");
	}


	function Auni(godz, min, czas){
		if (((godz >= 1 && godz < 4) && czas == "AM") || (godz == 12 && czas == "AM")) return "Śpi";
		else return "Nie śpi";
	}
	
	function Aunitime(godz, minuta, czas){
		if (Auni(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 4, 0, "AM");
		else return "Idzie spać za - " + oblicz(godz, minuta, czas, 1, 0, "AM");
	}
	

	function Badruu(godz, min, czas){
		if (((godz >= 1 && min >= 50) && czas == "AM") && (godz < 4 && czas == "AM")) return "Śpi";
		else if ((godz >= 9 && czas == "PM") || (godz == 12 && czas == "AM")) return "Drzemie";
		else return "Nie śpi";
	}
	
	var Badruulaststate;
	function Badruutime(godz, minuta, czas){
		if (Badruu(godz, minuta, czas) == "Śpi"){
			return "Budzi się za - " + oblicz(godz, minuta, czas, 4, 0, "AM");
			Badruulaststate = "Śpi";
		}
		else if (Badruu(godz, minuta, czas) == "Drzemie"){
			return "Budzi się za - " + oblicz(godz, minuta, czas, 1, 0, "AM");
			Badruulaststate = "Drzemie"
		}
		else{
			if (Badruulaststate == "Śpi") return "Idzie spać za - " + oblicz(godz, minuta, czas, 9, 0, "PM");
			else if (Badruulaststate == "Drzemie") return "Idzie spać za - " + oblicz(godz, minuta, czas, 1, 50, "AM");
		}
	}
	

	function Caleri(godz, min, czas){
		if ((godz >= 10 && czas == "PM") || ((godz == 12 && czas == "AM") || (godz < 5 && czas == "AM"))) return "Śpi";
		else return "Nie śpi";
	}
	
	function Caleritime(godz, minuta, czas){
		if (Caleri(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 5, 0, "AM");
		else return "Idzie spać za - " + oblicz(godz, minuta, czas, 10, 0, "PM");
	}
	

	function Chayne(godz, min, czas){
		if ((godz >= 9 && czas == "PM") || ((godz == 12 && czas == "AM") || (godz < 3 && czas == "AM"))) return "Śpi";
		else return "Nie śpi";
	}
	
	function Chaynetime(godz, minuta, czas){
		if (Chayne(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 3, 0, "AM");
		else return "Idzie spać za - " + oblicz(godz, minuta, czas, 9, 0, "PM");
	}
	

	// function Delaila(godz, min czas){
		// if ((godz >= 9 && czas == "PM") || ((godz == 12 && czas == "AM") || (godz < 3 && czas == "AM"))) return "Śpi";
		// else return "Nie śpi";
	// }
	
	// function Delailatime(godz, minuta, czas){
		// if (Delaila(godz, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 3, "AM");
		// else return "Idzie spać za - " + oblicz(godz, minuta, czas, 9, "PM");
	// }
	

	function Einar(godz, min, czas){
		if (((godz == 12 && min >= 45) && czas == "AM") || (godz < 3 && czas == "AM")) return "Śpi";
		else return "Nie śpi";
	}
	
	function Einartime(godz, minuta, czas){
		if (Einar(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 3, 0, "AM");
		else return "Idzie spać za - " + oblicz(godz, minuta, czas, 12, 45, "AM");
	}
	

	// function Hassain(godz, min, czas){
		// if () return "Śpi";
		// else return "Nie śpi";
	// }
	
	// function Hassaintime(godz, minuta, czas){
		// if (Hassain(godz, minuta, czas) == "Śpi") return "Budzi się za - " + oblicz(godz, minuta, czas, 3, 0, "AM");
		// else return "Idzie spać za - " + oblicz(godz, minuta, czas, 12, 45, "AM");
	// }