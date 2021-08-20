const mongoose = require("mongoose");

const Message = require("../models/message");

const sendMessage = async (req, res) => {
  let messages;
  const { message } = req.body;

  const newMessage = new Message({ message });

  try {
    const session = await mongoose.startSession();
    session.startTransaction();
    await newMessage.save({ session: session });
    messages.push(newMessage);
    await messages.save({ session: session });
    await session.commitTransaction();
  } catch (err) {
    console.log(err);
  }

  res.json("Message sent!");
};

exports.sendMessage = sendMessage;
