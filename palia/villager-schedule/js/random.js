	function ampm(){
		if ($(".ampm").html() == "AM") $(".ampm").html("PM"); else $(".ampm").html("AM");
	}	
	
	$(".minuta").on("change", function(){
		console.log($(".minuta").val());
		if ($(".minuta").val() <= 9) $(".minuta").val("0" + $(".minuta").val());
	});
	
	$(".submit").on("click", function(){
		var godzina = parseInt($(".godzina").val());
		var minuta = parseInt($(".minuta").val());
		var czas = $(".ampm").html();
		var poradnia;
		
		$(".container").load("villagers.html", function(){
			if(typeof(godzina) != "undefined") $(".godz").html(godzina);
			if(typeof(minuta) != "undefined"){
				if (minuta <= 9) $(".min").html("0" + minuta);
				else $(".min").html(minuta);
			}
			if(typeof(czas) != "undefined") $(".czas").html(czas);
			
			if ((godzina >= 3 && godzina < 6) && czas == "AM") poradnia = "Świt";
			if ((godzina >= 6 && czas == "AM") || (godzina < 6 && czas == "PM")) poradnia = "Dzień";
			if ((godzina >= 6 && godzina < 9) && czas == "PM") poradnia = "Wieczór";
			if ((godzina >= 9 && czas == "PM") || (godzina < 3 && czas == "AM") || godzina == 12 && czas == "AM") poradnia = "Noc";
			$(".poradnia").html(poradnia);
			
			$(".villagername").each(function(){
				var name = $(this).attr("value");
				$(this).html(name);
			});
			
			$(".villagerimage").each(function(){
				var name = $(this).attr("value");
				$(this).html("</span><br><img src='img/" + name + "-Avatar.jpg'>");
			});			
			
			$(".villageraction").each(function(){
				var imie = $(this).attr("value");
				$(this).html(window[imie](godzina, minuta, czas));
			});
				
			$(".villagertime").each(function(){
				var imie = $(this).attr("value");
				imie += "time";
				$(this).html(window[imie](godzina, minuta, czas));
			});
			
			setInterval(function(){
				minuta += 1;
				
				if (godzina == 11 && minuta == 60){
					if (czas == "AM") czas = "PM";
					else czas = "AM";
				}
				
				if (minuta == 60){
					minuta = 00;
					godzina += 1;
				}
				
				if (godzina == 13){
					godzina = 1;
				}
			
				if(typeof(godzina) != "undefined") $(".godz").html(godzina);
				if(typeof(minuta) != "undefined"){
					if (minuta <= 9) $(".min").html("0" + minuta);
						else $(".min").html(minuta);
				}
				if(typeof(czas) != "undefined") $(".czas").html(czas);
				
				if ((godzina == 3 && czas == "AM") && poradnia == "Noc") poradnia = "Świt";
				if ((godzina == 6 && czas == "AM") && poradnia == "Świt") poradnia = "Dzień";
				if ((godzina == 6 && czas == "PM") && poradnia == "Dzień") poradnia = "Wieczór";
				if ((godzina == 9 && czas == "PM") && poradnia == "Wieczór") poradnia = "Noc";
				$(".poradnia").html(poradnia);
				
				
				$(".villageraction").each(function(){
					var imie = $(this).attr("value");
					$(this).html(window[imie](godzina, minuta, czas));
				});
				
				$(".villagertime").each(function(){
					var imie = $(this).attr("value");
					imie += "time";
					$(this).html(window[imie](godzina, minuta, czas));
				});
				
			},60/24*1000);
		});
	});

	