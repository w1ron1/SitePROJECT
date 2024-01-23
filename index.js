$(document).ready(() => {
  const socket = io();

  $('#form').submit((e) => {
      e.preventDefault();
      socket.emit('chat message', $('#m').val());
      $('#m').val('');
      return false;
  });

  socket.on('chat message', (msg) => {
      $('#chat').append($('<div class="message">').text(msg));
      scrollChatToBottom();
  });

  if (msg = '/clear') {
    
  }
  
  function scrollChatToBottom() {
      const chatBox = $('#chat');
      chatBox.scrollTop(chatBox[0].scrollHeight);
  }
});
