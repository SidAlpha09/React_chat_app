import React from 'react';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
  return (
      <PrettyChatWindow
        projectId//add your project id
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100vh'}}
      />
  );
};

export default ChatsPage;
