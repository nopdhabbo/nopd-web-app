'use client'
import React, { useState } from 'react';
import Image from 'next/image';

// import style
import style from './style.module.css'

// import components
import Heading2 from '@/components/common/heading/Heading2'
import Heading1 from '@/components/common/heading/Heading1'

interface IndexProps {
  userName: string;
  position: string;
  width: number;
  height: number;
}

const Index: React.FC<IndexProps> = ({ userName, position, width, height }) => {
  // Define the regular and hover image URLs using state
  const [imageSrc, setImageSrc] = useState(`https://www.habbo.com/habbo-imaging/avatarimage?user=${userName}&direction=4&head_direction=4&action=&gesture=nrm&size=m`);
  const hoverImageUrl = `https://www.habbo.com/habbo-imaging/avatarimage?user=${userName}&direction=4&head_direction=3&action=wav&gesture=nrm&size=m`;

  return (
    <div className={style.avatar}>
      <Image
        src={imageSrc}
        alt={userName}
        width={width}
        height={height}
        onMouseEnter={() => setImageSrc(hoverImageUrl)}
        onMouseLeave={() => setImageSrc(`https://www.habbo.com/habbo-imaging/avatarimage?user=${userName}&direction=4&head_direction=4&action=&gesture=nrm&size=m`)}
      />
      <Heading2>{userName}</Heading2>
      <Heading1>{position}</Heading1>
    </div>
  );
};

export default Index;