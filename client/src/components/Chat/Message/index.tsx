import React from "react";

type Props = {
  message: string;
};

const Message: React.FC<Props> = (props) => {
  return <p>{props.message}</p>;
};

export default Message;
