function picture(items, loves, name, weekly){
	var zdjecia = "";
	for (var i=0;i<items.length;i++){
		if (weekly) zdjecia += "<img title='" + items[i] + "' class='i_photo' mode='" + name + "-weekly-" + i + "' src='img/items/" + items[i] + ".png'/>"
		else if (!loves) zdjecia += "<img title='" + items[i] + "' class='i_photo' mode='" + name + "-normal-" + i + "' src='img/items/" + items[i] + ".png'/>";
		else zdjecia += "<img title='" + items[i] + "' class='i_photo loves' mode='" + name + "-normal-" + i + "' src='img/items/" + items[i] + ".png'/>";
	}
	return zdjecia;
}

$.ajax({
	url: "villagers.json",
	dataType: "json",
	success: function(data){
		var villagers = data.Villagers;
		villagers.forEach(function(villager){
			for(var i=0; i<24; i++){
				var name = Object.keys(villager)[i];
				var weekly = villager[name].Weekly;
				var loves = villager[name].Loves;
				var likes = villager[name].Likes;
				
			
				$("tbody").append(
					"<tr>" + 
					"<td><button class='hoverable daily_button " + name + "_daily_button' name='" + name + "' dailyDone='false' onclick='daily_Check(\"" + name + "\")'>Daily</button></td>" +
					"<td><img class='v_photo " + name + "' src='img/villagers/" + name + "-Avatar.jpg' <br> <button class='compl_button " + name + "_button' onclick='complete(\"" + name + "\")' name='" + name + "' value='0'>SET AS COMPLETE</button></td>" +
					"<td>" + name + "</td>" +
					"<td> " + picture(weekly, 0, name, 1) + " </td>" +
					"<td> " + picture(loves, 1, name, 0) + picture(likes, 0, name, 0) + " </td>" +
					"</tr>"
				);
			}			
		});
	},
	error: function(xhr, status, error) {
		console.error("Błąd podczas ładowania pliku JSON:", error);
	}
});

$("body").on("click", ".i_photo", function(){
	if($(this).hasClass("highlighted")){
		var item = $(this).attr("mode");
		$(this).removeClass("highlighted");
		Cookies.remove(item);
	}
	else{
		var item = $(this).attr("mode");
		$(this).addClass("highlighted");
		Cookies.set(item, true, { expires: 7 });
	}
})

$("body").on("contextmenu", ".i_photo", function(){
	var pageName = $(this).attr("title");
	pageName.replace(" ", "-");
	
	window.open("https://palia.wiki.gg/wiki/" + pageName);
})

function visibility(){
	$(".completed").parent().parent().toggle();
}

function daily_Check(name){
	if ($("."+name+"_daily_button").attr("dailyDone") == "false"){
		$("."+name+"_daily_button").attr("dailyDone", "true");
		$("."+name+"_daily_button").css("background", "#419e33");
		Cookies.set(name+"_daily", name, { expires : 1 });
	}else{
		$("."+name+"_daily_button").attr("dailyDone", "false");
		$("."+name+"_daily_button").css("background", "#f04337");
		Cookies.remove(name+"_daily");
	}
}

function gray(name, status){
	for(var i=0;i<4;i++){
		if (!status){
			$("img[mode='" + name + "-weekly-" + i + "']").css("filter", "grayscale(100%)");
		}else{
			$("img[mode='" + name + "-weekly-" + i + "']").css("filter", "none");
		}
	}
}

function complete(name){
	var stan = parseInt($("."+name+"_button").attr("value"));
	if(!stan){
		$("."+name).addClass("completed");
		$("."+name+"_button").attr("value", 1);
		$("."+name+"_button").text("SET AS INCOMPLETE");
		
		Cookies.set(name+"_complete", name, { expires : 365 });
	}else{
		$("."+name).removeClass("completed");
		$("."+name+"_button").attr("value", 0);
		$("."+name+"_button").text("SET AS COMPLETE");
		
		Cookies.remove(name+"_complete");
	}
	gray(name, stan);
}

function ciasteczka(refreshing){
	$.each($(".i_photo"), function(){
		var item = $(this).attr("mode");
		if (Cookies.get(item) == "true") $(this).addClass("highlighted");
	});
	
	$.each($(".compl_button"), function(){
		var name = $(this).attr("name");
		var val = $(this).attr("val");
		if (Cookies.get(name+"_complete") == name && !refreshing) complete(name);
	});
	
	$.each($(".daily_button"), function(){
		var name = $(this).attr("name");
		if (Cookies.get(name+"_daily") == name && !refreshing) daily_Check(name);
	})
}

function wyczyscCiasteczka(){
	$.each($(".i_photo"), function(){
		var item = $(this).attr("mode");
		if (Cookies.get(item) == "true"){
			Cookies.remove(item);
			$(this).removeClass("highlighted");
		}
	})
}

$(document).ready(function(){
	setTimeout(function(){ciasteczka()}, 190);
})
