import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
  try {

    

    console.log("message sent", req.params.id);
    const { message } = req.body;
    const receiverId = req.params.id;
    const senderId = req.user._id;
    console.log("message", message)
    console.log("senderId", senderId);
    console.log("receiverId", receiverId);


    // Validate payload
    if (!message || !receiverId) {
      return res.status(400).json({ message: "Invalid payload" });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId]},
    })

    if(!conversation){
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      })
    }

    const newMessage = await Message({
      senderId: senderId,
      receiverId: receiverId,
      message: message
    });
    if(newMessage){
      // this will send the new message to the conversation
      conversation.messages.push(newMessage._id);
    }

    // SOCKET IO functionality to make it realtime

    // await conversation.save();
    // await newMessage.save();

    // this will run in parallel
    await Promise.all([conversation.save(), newMessage.save()]);
    
    return res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error"
    });
    
  }

}

export const getMessages = async (req, res) => {
  try {
    const userToChatId = req.params.id;
    const senderId = req.user._id;

    if (!userToChatId) {
      return res.status(400).json({ message: "Invalid user ID" });
    }

    // populate the conversation with messages
    // bcz in messages there will be a list of ids
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId]},
    }).populate('messages'); // not reference but messages itself

    if(!conversation){
      return res.status(200).json({
        messages: []
      });
    }

    return res.status(200).json(conversation);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error"
    });
  }
}