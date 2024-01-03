const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open', () => {
  console.log('open WebSocket');
});

socket.addEventListener('message', (message) => {
  console.log('Server Message', message.data);
});

socket.addEventListener('close', () => {
  console.log('close WebSocket');
});

setTimeout(() => {
  socket.send('hello from the browser');
}, 3000);
