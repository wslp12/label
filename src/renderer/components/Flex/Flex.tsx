import React from 'react';

function Flex(props: {
  children: React.ReactNode;
  fd?: 'row' | 'column';
  style?: React.CSSProperties;
}) {
  const { children, fd, style } = props;
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: fd,
    height: '100%',
  };
  return <div style={{ ...defaultStyle, ...style }}>{children}</div>;
}

Flex.defaultProps = {
  fd: 'row',
  style: undefined,
};

export default Flex;
