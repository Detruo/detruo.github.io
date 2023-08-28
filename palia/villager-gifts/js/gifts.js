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
			for(var i=0; i<23; i++){
				var name = Object.keys(villager)[i];
				var weekly = villager[name].Weekly;
				var loves = villager[name].Loves;
				var likes = villager[name].Likes;
				
			
				$("tbody").append(
					"<tr>" + 
					"<td><img class='v_photo' src='img/villagers/" + name + "-Avatar.jpg'</td>" +
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
		Cookies.set(item, true { expires: 7 });
	}
})

$("body").on("contextmenu", ".i_photo", function(){
	var pageName = $(this).attr("title");
	pageName.replace(" ", "-");
	
	window.open("https://palia.wiki.gg/wiki/" + pageName);
})

function ciasteczka(){
	$.each($(".i_photo"), function(){
		var item = $(this).attr("mode");
		if (Cookies.get(item) == "true") $(this).addClass("highlighted");
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
