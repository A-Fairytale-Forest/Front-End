// Badge.tsx

import React from "react";
import styled from "styled-components";

interface BadgeProps {
  name: string;
  image: string;
  locked: boolean;
  onClick: () => void;
}

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const BadgeImage = styled.img`
  width: 100px;
  height: 100px;
`;

const BadgeName = styled.span`
  margin-top: 5px;
`;

const LockIcon = styled.span`
  font-size: 24px;
  position: absolute;
`;

const Badge: React.FC<BadgeProps> = ({ name, image, locked, onClick }) => {
  return (
    <BadgeContainer onClick={onClick}>
      <BadgeImage src={image} alt={name} />
      {locked && <LockIcon>🔒</LockIcon>}
      <BadgeName>{name}</BadgeName>
    </BadgeContainer>
  );
};

export default Badge;
