$(document).ready(function() {
   $("button").click(function(){
  $.post("/favorite",
  {
    postId: $(this).val()
    
  })
});
 });