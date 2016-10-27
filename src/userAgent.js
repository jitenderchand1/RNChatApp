if (!window.location) {
    // App is running in simulator
    window.navigator.userAgent = 'ReactNative';
}

// This must be below your `window.navigator` hack above
const io = require('socket.io-client/socket.io');
const socket = io('http://10.1.21.178:3000', {
  transports: ['websocket'] // you need to explicitly tell it to use websockets
});


module.exports = socket;