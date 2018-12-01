$(function(){

  function buildHTML(message){
    var html = `<div class="chat__room_user">
                  ${message.user_name}
                </div>
                <div class="chat__room_day">
                  ${message.created_at}
                </div>
                <div class="chat__room_anser">
                  ${message.content}
                  ${message.image}
                </div>`
    return html;
  }

  $("#new_message").on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildHTML(message);
      var targetTop = $('.target_point').offset().top;
      $('.chat__room').append(html)
      $('.chat__form_button').prop('disabled', false)
      $('.chat__room').animate({scrollTop: targetTop},"fast","swing");
    })
    .fail(function(massage){
      alert('メッセージを入力してください。');
    })
  })
})

$(function(){
  function buildHTML(message){
    var html = `<div class="chat__room_user">
                  ${message.user_name}
                </div>
                <div class="chat__room_day">
                  ${message.created_at}
                </div>
                <div class="chat__room_anser">
                  ${message.content}
                  ${message.image}
                </div>`
    return html;
  }

  setInterval(function() {
    $.ajax({
      url: '/groups/:group_id/messages'
    })
    .done(function(json) {
      var insertHTML = '';
      json.messages.forEach(function(message) {
        insertHTML += buildHTML(message);
        });
        $('.chat-wrapper').html(insertHTML);
    })
    .fail(function(data) {
      alert('自動更新に失敗しました');
    });
  } , 5000 );
})


