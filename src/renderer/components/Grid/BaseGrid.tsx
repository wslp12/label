import React from 'react';

function BaseGrid(props: {
  children: React.ReactNode;
  gc?: string;
  gr?: string;
}) {
  const { children, gc, gr } = props;
  const style: React.CSSProperties = {
    display: 'grid',
    height: '100%',
    gridTemplateColumns: gc,
    gridTemplateRows: gr,
  };
  return (
    <div className="box" style={style}>
      {children}
    </div>
  );
}

BaseGrid.defaultProps = {
  gc: undefined,
  gr: undefined,
};

export default BaseGrid;
