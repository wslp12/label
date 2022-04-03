import React from 'react';

interface BaseImageProps {
  children?: React.ReactNode;
  url?: string;
}

function BaseImage(props: BaseImageProps) {
  const { children, url } = props;
  const style: React.CSSProperties = {
    width: '100%',
    height: '100%',
    backgroundSize: 'cover',
    backgroundImage: `url(${url})`,
  };
  return (
    <div data-base-img style={style}>
      {children}
    </div>
  );
}

BaseImage.defaultProps = {
  children: undefined,
  url: undefined,
};

export default BaseImage;
