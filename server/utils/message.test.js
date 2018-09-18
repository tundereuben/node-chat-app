var expect = require('expect');

var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Tunde', 'Test message');

    expect(message.from).toBe('Tunde');
    expect(message.text).toBe('Test message');
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Lucent';
    var latitude = 1;
    var longitude = 1;
    var message = generateLocationMessage(from, latitude, longitude);
    var url = message.url;

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, url});
  });
});
