$(function() {
  var search_user = $("#user-search-result");
  var add_user = $("#user-add-result");

  function appendUsers(users) {
    var html = `<div class="chat-group-user clearfix" id="appendUsers">
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

  function appendaddUser(user) {
    var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
                  <input name='group[user_ids][]' type='hidden' value="${user.id}">
                  <p class='chat-group-user__name'>${user.name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    add_user.append(html);
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
            $(document).on("click","#appendUsers", function(users) {
              $("#appendUsers").empty();
                appendaddUser(user);
            });
        });
      }
      else{
        appendNoUser()
      }
    })

    .fail(function() {
      alert('検索に失敗しました');
    });

    $(document).on("click","#chat-group-user-8", function() {
      $("#chat-group-user-8").empty();
    });
  });
});
