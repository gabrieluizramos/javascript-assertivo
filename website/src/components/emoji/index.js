import React from 'react';

const Emoji = ({ content, ...props }) => (
  <span role="img" {...props}>{content}</span>
);

export default Emoji;
