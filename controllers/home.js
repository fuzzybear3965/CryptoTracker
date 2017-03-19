exports.getIndex = function(req, res) {
  res.render('home');
};

exports.postIndex = function(req, res) {
   function saveData(data) {
      console.log(data)
      res.locals.data = JSON.stringify(data);
   }

   var rp = req.app.get('rp');

   //pubkeys = req.body
   pubkeys = [
      { "pubkey":"1BoatSLRHtKNngkdXEeobR76b53LETtpyT","curr":"BTC"},
      { "pubkey":"3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC","curr":"BTC"}
   ]

   var currs = [];

   for (key of pubkeys) {
      switch (key.curr) {
         case 'BTC':
            if (typeof BTC_keys_as_array === "undefined") {
               var BTC_keys_as_array = [];
            }
            BTC_keys_as_array.push(key.pubkey)
            currs.push("BTC");
            break;
         case 'ETH':
      }
   }

   var options = {
      uri: 'https://blockexplorer.com/api/addrs/txs',
      method: 'POST',
      body: { 'addrs': JSON.stringify(BTC_keys_as_array).replace(/[\[\]'"]+/g,'')},
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
