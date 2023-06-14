import React from "react";

interface TextProp {
  item: { text: string };
}

const PostText: React.FC<TextProp> = ({ item }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: item.text }}
      className="my-4"
    >
    </p>
  );
};

export default PostText;