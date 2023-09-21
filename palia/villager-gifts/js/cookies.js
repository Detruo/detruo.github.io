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
