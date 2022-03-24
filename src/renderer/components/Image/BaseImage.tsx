import React from 'react';
import './BaseImage.scoped.css';

interface BaseImageProps {
  children?: React.ReactNode;
  url?: string;
}

function BaseImage(props: BaseImageProps) {
  const { children, url } = props;
  return (
    <div
      data-base-img
      style={{
        backgroundImage: `url(${url})`,
      }}
    >
      {children}
    </div>
  );
}

BaseImage.defaultProps = {
  children: undefined,
  url: undefined,
};

export default BaseImage;
