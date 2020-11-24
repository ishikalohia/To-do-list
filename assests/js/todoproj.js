$("input").on("change",function(event){
	if(event.which = 13){
		var newToDo = "<tr><td><span><i class='fa fa-trash'></i></span>" + $("input").val() + "</td></tr>";
		$("table tbody").append(newToDo);
		$("input").val("");
	}
})
$("#plus").on("click",function(){
	$("input").parent().parent().fadeToggle();
})
$("table").on("click","tr td",function(){
	$(this).toggleClass("completed");
})
$("table").on("click","span",function(event){

	$(this).parent().fadeOut(500,function(){
		$(this).parent().remove();
	})
	event.stopPropagation();
})
