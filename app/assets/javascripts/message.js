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

 setInterval(function() {
    $.ajax({
      url: location.href.json,
    })
    .done(function(data) {
    })
    .fail(function(data) {
    });
  } else {
    clearInterval(interval);
   } , 5000 );
});

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

