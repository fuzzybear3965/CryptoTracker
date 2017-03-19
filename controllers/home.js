exports.getIndex = function(req, res) {
  res.render('home');
};

exports.postIndex = function(req, res) {
   function saveData(data) {
      console.log(data)
      res.locals.data = JSON.stringify(data);
   }

   var rp = req.app.get('rp');

   var options = {
      uri: 'https://blockexplorer.com/api/addrs/txs',
      method: 'POST',
      body: { 'addrs':'19SokJG7fgk8iTjemJ2obfMj14FM16nqzj'},
      json: true
   };

   rp(options)
      .then(function (body) {
         saveData(body)
      })
      .catch(function (err) {
         console.log(err)
      })
      .finally(function() {
         res.render('home');
      });

};
