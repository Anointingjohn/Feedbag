import React from "react";

interface AvatarProp {
  imgUrl: string;
}

const Avatar: React.FC<AvatarProp> = ({ imgUrl }) => {
  return (
    <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
      <img src={imgUrl} alt="Avatar" className="w-full h-full object-cover" />
    </div>
  );
};

export default Avatar;
