import React, { useState } from 'react';

import Item from './Item';
import List from '@material-ui/core/List';
import PropTypes from 'prop-types';

const Message = ({ messages }) => {
  const [activeMessage, setActiveMessage] = useState(undefined);
  const handleMessageToggle = index =>
    setActiveMessage(activeMessage === index ? undefined : index);

  return (
    <List component="div" disablePadding={true}>
      {messages &&
        messages.map((message, index) => (
          <Item
            key={index}
            index={index}
            message={message}
            activeMessage={activeMessage}
            toggleMessage={handleMessageToggle}
          />
        ))}
    </List>
  );
};

Message.prototypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      from: PropTypes.string,
      date: PropTypes.number,
      subject: PropTypes.string,
      avatar: PropTypes.element,
      body: PropTypes.string
    })
  ).isRequired
};

export default Message;
