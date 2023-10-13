// using 3 components inside chatfeed

import React from 'react'
import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed = (props) =>{
  // messages is an object which contains sender name, what message he sent etc..
  const {chats, activeChat, userName, messages} = props;
  console.log(props);
  // if chat exists
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));
  // function for generating messages
  const renderMessages = () => {
      // keys are ids of the messages...for each message we have an id
      // object.keys returns an array of keys from object
      const keys = Object.keys(messages);

      return keys.map((key, index) => {
        const message = messages[key];
        const lastMessageKey = index === 0 ? null : keys[index - 1];
        // store username in 'isMyMessage' if username is equal to username u want
        const isMyMessage = userName === message.sender.username;

        return (
          <div key={`msg_${index}`} style={{ width: '100%' }}>
            <div className="message-block">
              {isMyMessage
                ? <MyMessage message={message} />
                : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
            </div>
            <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
              {renderReadReceipts(message, isMyMessage)}
            </div>
          </div>
        );
      });
    };

    if (!chat) return <div />;

    return (
      <div className="chat-feed">
        <div className="chat-title-container">
          <div className="chat-title">{chat?.title}</div>
          <div className="chat-subtitle">
            {chat.people.map((person) => ` ${person.person.username}`)}
          </div>
        </div>
        {renderMessages()}
        <div style={{ height: '100px' }} />
        <div className="message-form-container">
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    );
  };

export default ChatFeed;
