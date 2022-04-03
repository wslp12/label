import React from 'react';

function Flex(props: { children: React.ReactNode; fd?: 'row' | 'column' }) {
  const { children, fd } = props;
  const style: React.CSSProperties = {
    display: 'flex',
    flexDirection: fd,
    height: '100%',
  };
  return <div style={style}>{children}</div>;
}

Flex.defaultProps = {
  fd: 'row',
};

export default Flex;
