import { css } from '@emotion/css';
import React from 'react';

interface DimmedProps {
  children?: React.ReactNode;
}

function Dimmed(props: DimmedProps) {
  const { children } = props;

  return (
    <div
      className={css({
        position: 'fixed',
        zIndex: '100',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      {children}
    </div>
  );
}

Dimmed.defaultProps = {
  children: undefined,
};

export default Dimmed;
