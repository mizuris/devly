const mongoose = require("mongoose");

const Message = require("../schemas/message-schema");

const sendMessage = (req, res) => {
  const { name, text } = req.body;

  const newMessage = new Message({
    name,
    text,
  });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newMessage.save({ session: session });
  } catch (err) {
    console.log(err);
  }
};

exports.sendMessage = sendMessage;
