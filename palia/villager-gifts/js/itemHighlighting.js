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