$(function() {

  var search_user = $("#user-search-result");

  function appendUsers(users) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${users.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${users.id}" data-user-name="${users.name}">追加</a>
                </div>`
    search_user.append(html);
  }

  function appendNoUser() {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">一致しません</p>
                </div>`
    search_user.append(html);
  }

  $("#user_ids").on("keyup", function() {
    var input = $("#user_ids").val();
    $.ajax({
      type: 'GET',
      url: '/users',
      data: { keyword: input },
      dataType: 'json'
    })

    .done(function(users) {
      if(users.length !== 0){
        users.forEach(function(user){
          appendUsers(user);
        });
      }
      else{
        appendNoUser()
      }
    })

    .fail(function() {
      alert('検索に失敗しました');
    })
  });
});
