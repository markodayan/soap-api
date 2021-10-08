const soap = require('soap');
const express = require('express');
const { myService } = require('./service'); 

const xml = require('fs').readFileSync('myservice.wsdl', 'utf8');

const app = express();
const server = require('http').createServer(app);


server.listen(5000);
soap.listen(server, '/wsdl', myService, xml, function() {
  console.log('service initialised');
})