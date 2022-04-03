import React from 'react';

function Grid(props: { children: React.ReactNode; gc?: string; gr?: string }) {
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

Grid.defaultProps = {
  gc: undefined,
  gr: undefined,
};

export default Grid;
