var elastic = require('../elasticSearch');

module.exports = function(app) {
  // search for a listing
  app.get('/listings/:input', function(req, res, next){
    console.log('YOOOOO', req.params.input);
    elastic.getSearch(req.params.input)
    .then(function(result){
      res.json(result);
    });
  });
  // create listing
  app.post('/listings', function(req, res, next){
    elastic.addListing(req.body)
    .then(function(result){
      res.json(result);
    });
  });
  // suggest listings based on keyword
  app.get('/listings/suggest/:input', function(req, res, next){
    elastic.getSuggestions(req.params.input)
    .then(function(result) {
      res.json(result);
    });
  });
  app.delete('/listings/:input', function(req, res, next){
    elastic.deleteDocument(req.params.input)
    .then(function(result){
      res.json(result);
    });
  });
};