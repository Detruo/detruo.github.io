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

// ODZNACZ WSZYSTKIE DAILY

$(".system_button_daily").on("click", function(){
	$.each($(".daily_button"), function(){
		var name = $(this).attr("name");
		if (Cookies.get(name+"_daily") == name) daily_Check(name);
	})
});