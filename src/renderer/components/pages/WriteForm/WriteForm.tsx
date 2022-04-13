/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Input } from 'reactstrap';
import fEditor from 'editor/fEditor';

function WriteForm() {
  useEffect(() => {
    const editor = document.querySelector('#editor');

    fEditor(editor, () => {
      console.log(1);
    });
  }, []);

  return (
    <div
      style={{
        overflow: 'scroll',
        height: '100%',
        boxShadow: '0px 0px 1px 0px grey',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ padding: '10px' }}>
        <Input />
      </div>
      <div
        id="editor"
        style={{
          marginTop: '5px',
          flexGrow: 1,
          margin: '10px',
          overflow: 'scroll',
        }}
      />
    </div>
  );
}

export default WriteForm;
