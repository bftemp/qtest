var isPalindrome = require('is-palindrome');

module.exports = function(Message) {
  Message.palindromeCheck = function(mID, cb) {
    Message.findById( mID, function (err, instance) {
        var pal = isPalindrome(instance.message);
        response = pal;
        cb(null, response);
        console.log(response);
    });
  };
  Message.remoteMethod (
      'palindromeCheck',
      {
        http: {path: '/palindromecheck', verb: 'get'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'palindrome', type: 'Boolean'}
      }
  );
};
