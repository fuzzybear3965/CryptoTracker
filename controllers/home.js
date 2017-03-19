exports.getIndex = function(req, res) {
  res.render('home');
};

exports.postIndex = function(req, res) {
   function saveData(data,io) {
      console.log(data)
      res.locals.data = JSON.stringify(data);
   }
   
   function APIGrab(opts, curr) {
      rp(opts)
         .then(function (body) {
            saveData(body,curr)
         })
         .catch(function (err) {
            console.log(err)
         })
         .finally(function() {
            res.render('home');
         });
   }

   // rp is request-promise
   var rp = req.app.get('rp');
   var io = req.app.get('io');
   pubkeys = [
      { "pubkey":"1BoatSLRHtKNngkdXEeobR76b53LETtpyT","curr":"BTC"},
      { "pubkey":"3QJmV3qfvL9SuYo34YihAf3sRCW3qSinyC","curr":"BTC"}
   ]
   // list of currencies
   var currs = [];

   // loop through pubkeys grabbing the currencies provided
   for (key of pubkeys) {
      switch (key.curr) {
         case 'BTC':
            if (typeof BTC_keys_as_array === "undefined") {
               var BTC_keys_as_array = [];
               currs.push("BTC");
            }
            BTC_keys_as_array.push(key.pubkey)
            break;
         case 'ETH':
            if (typeof ETH_keys_as_array === "undefined") {
               var ETH_keys_as_array = [];
               currs.push("ETH");
            }
      }
   }

   if ((typeof BTC_keys_as_array !== "undefined") && (BTC_keys_as_array.length > 0)){
      var options = {
         uri: 'https://blockexplorer.com/api/addrs/txs',
         method: 'POST',
         body: { 'addrs': JSON.stringify(BTC_keys_as_array).replace(/[\[\]'"]+/g,'')},
         json: true
      };
      APIGrab(options,'BTC');
   }
};
