import React from 'react';

function Cell(props: {
  children: React.ReactNode;
  c?: string;
  r?: string;
  h?: string;
}) {
  const { children, c, r, h } = props;
  return (
    <div
      style={{
        gridColumn: c,
        gridRow: r,
        height: h,
      }}
    >
      {children}
    </div>
  );
}

Cell.defaultProps = {
  c: undefined,
  r: undefined,
  h: '100%',
};

export default Cell;
