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
      $('.chat__room').append(html)
      $('.chat__form_button').prop('disabled', false)
    })
    .fail(function(massage){
      alert('メッセージを入力してください。');
    })
  })
})

$(function(){
  function buildHTML(message){
    var html = `<div class="chat__room_user">
                  ${message.name}
                </div>
                <div class="chat__room_day">
                  ${message.date}
                </div>
                <div class="chat__room_anser">
                  ${message.content}
                  ${message.image}
                </div>`
    return html;
  }

  setInterval(function() {
    $.ajax({
      url: location.href.json,
      type: "GET",
      dataType: 'json'
    })
    .done(function(json) {
      var insertHTML = '';
      json.messages.forEach(function(message){
        insertHTML += buildHTML(message);
        $('.chat__room').html(insertHTML);
      });
    })
    .fail(function(json) {
    alert('自動更新に失敗しました');
    });
  } , 5000 );
})
