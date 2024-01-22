document.addEventListener('DOMContentLoaded', function () {
 const socket = io();

 const form = document.getElementById('form');
 const inputMessage = document.getElementById('m');
 const messagesList = document.getElementById('messages');

 socket.on('connect', function () {
   console.log('Connected to the server');
 });

 socket.on('disconnect', function () {
   console.log('Disconnected from the server');
 });

 form.addEventListener('submit', function(event) {
   event.preventDefault();
   
   const message = inputMessage.value.trim();
   if (message) {
     socket.emit('chat message', message);
     inputMessage.value = '';
   }
 });

 socket.on('chat message', function(msg) {
   const listItem = document.createElement('li');
   listItem.textContent = msg;
   messagesList.appendChild(listItem);
 });
});
