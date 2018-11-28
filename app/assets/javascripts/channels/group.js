$(function() {

  $("#user_ids").on("keyup", function() {
    var input = $("#user_ids").val();
    console.log(input)
    $.ajax({
      type: 'GET',
      url: 'groups#edit',
      data: { keyword: input },
      dataType: 'json'
    })
    .done(function(user_ids) {
       $("#user-search-result").empty();
       if (products.length !== 0) {
         products.forEach(function(user_ids){
           appendProduct(product);
         });
       }
       else {
         appendNoProduct("一致する映画はありません");
       }
    })
  });
});
