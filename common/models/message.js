var isPalindrome = require('is-palindrome');

module.exports = function(Message) {
  Message.palindromeCheck = function(mID, cb) {
    Message.findById( mID, function (err, instance) {
        response = isPalindrome(instance.message);
        cb(null, response);
        console.log(response);
    });
  };
  Message.remoteMethod (
      'palindromeCheck',
      {
        http: {path: '/palindromecheck', verb: 'get'},
        accepts: {arg: 'id', type: 'string', http: { source: 'query' } },
        returns: {arg: 'palindrome', type: 'Boolean'},
        description:'Checks if the message is a palindrome'
      }
  );
};
