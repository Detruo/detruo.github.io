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