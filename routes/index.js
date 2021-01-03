var express = require('express');
var router = express.Router();
let generateInvoice = require('../invoice/generator')
let createInvoice = require('../invoice/invoice')


var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { 
    title: 'Guru Invoicer' 

  });
});



router.post('/generate', function(req, res, next) {  
  let filePath = "./invoice.pdf";
  let invData = req.body

  // console.log(invData)

  let invoice = createInvoice(invData)
  generateInvoice(invoice, 'invoice.pdf', function() {
    console.log("Saved invoice to invoice.pdf");
    fs.readFile(filePath , function (err,data) {
      res.contentType("application/pdf");
      res.status(200).send(data);
  });

  }, function(error) {
    console.error("Error in generate:", error);
    res.status(500).send(error)
  });

  

})


module.exports = router;
