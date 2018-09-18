var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var message = generateMessage('Tunde', 'Test message');

    expect(message.from).toBe('Tunde');
    expect(message.text).toBe('Test message');
    expect(message.createdAt).toBeA('number');
  });
});
