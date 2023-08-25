function picture(items, loves){
	var zdjecia = "";
	for (var i=0;i<items.length;i++){
		if(!loves) zdjecia += "<img title='" + items[i] + "' class='i_photo' src='img/items/" + items[i] + ".png'/>";
		else zdjecia += "<img title='" + items[i] + "' class='i_photo loves' src='img/items/" + items[i] + ".png'/>";
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
					"<td> " + picture(weekly) + " </td>" +
					"<td> " + picture(loves, 1) + picture(likes) + " </td>" +
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
	if($(this).hasClass("highlighted")) $(this).removeClass("highlighted");
	else $(this).addClass("highlighted");
})

$("body").on("contextmenu", ".i_photo", function(){
	var pageName = $(this).attr("title");
	pageName.replace(" ", "-");
	
	window.open("https://palia.wiki.gg/wiki/" + pageName);
})