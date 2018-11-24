$(function(){
  $('#new_comment').on('submit', function(e){
    var formData = new FormData(this);
    e.preventDefault();
  })
})
