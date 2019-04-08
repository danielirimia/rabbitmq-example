#!/usr/bin/env node

var amqp = require("amqplib/callback_api");

module.exports.sendHelloWorld = () => {
  amqp.connect("amqp://broker:5672", function(err, conn) {
    if (err) {
      console.log(err);
      return;
    }
    conn.createChannel(function(err, ch) {
      var q = "hello";

      ch.assertQueue(q, { durable: false });
      ch.sendToQueue(q, new Buffer.from("Hello World!"));
      console.log(" [x] Sent 'Hello World!'");
    });
    setTimeout(function() {
      conn.close();
    }, 500);
  });
};
