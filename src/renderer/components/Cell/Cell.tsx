import React from 'react';

function Cell(props: { children: React.ReactNode; c?: string; r?: string }) {
  const { children, c, r } = props;
  return (
    <div
      style={{
        gridColumn: c,
        gridRow: r,
      }}
    >
      {children}
    </div>
  );
}

Cell.defaultProps = {
  c: undefined,
  r: undefined,
};

export default Cell;
