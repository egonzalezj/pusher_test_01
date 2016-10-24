var Pusher = require('pusher');

var pusher = new Pusher({
  appId: '256606',
  key: '871e4825a7b4e6a0d3d5',
  secret: 'd59d96636d15fdfcb682',
  encrypted: true
});

pusher.trigger('test_channel', 'my_event', {
  "message": "hello world"
});
