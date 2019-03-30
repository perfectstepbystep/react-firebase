import React from 'react';
import MessageItem from './MessageItem';

const MessageList = ({ messages, onEditMessage, onRemoveMessage }) => (
  <ul>
    {messages.map(message => (
      <MessageItem key={message.uid} message={message} onRemoveMessage={onRemoveMessage}
                   onEditMessage={onEditMessage}
      />
    ))}
  </ul>
);

export default MessageList;
