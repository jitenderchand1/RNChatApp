if (!window.location) {
    // App is running in simulator
    window.navigator.userAgent = 'ReactNative';
}

// This must be below your `window.navigator` hack above
const io = require('socket.io-client/socket.io');
const socket = io('http://chat.feathersjs.com', {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});

socket.on('connect', () => {
  console.log('connected!');
});