module.exports.contactMe = function (data, cb) {
  sails.hooks.email.send(
    'contactMe',
    data,
    {
      to: 'devpoint.tech@gmail.com',
      subject: 'New Potential Client'
    },
    function (err) {
      cb(err);
    }
  )
};
