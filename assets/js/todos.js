//  Check off Specific to-dos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed")
});

// click on X to delete to-do
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(300 , function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        // make new il and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>")
    }
});

$(".fa-minus").click(function() {
	$("input[type='text']").fadeToggle();
})

function trash() {
	var entryHeight = $(".entry").first().css("height");
	$(".trash").first().css("lineHeight", entryHeight);
} 