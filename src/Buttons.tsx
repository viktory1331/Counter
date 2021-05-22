import { setUncaughtExceptionCaptureCallback } from 'node:process';
import React, { useState } from 'react';
import './App.css';

type ButtonsPropsType = {
  count?: number;
  incValue: () => void;
  resetValue: () => void;
};

export function Buttons(props: ButtonsPropsType) {
  return (
    <div className={'ContainerButtons'}>
      <button
        className={'Button'}
        onClick={props.incValue}
        disabled={props.count === 5 ? true : false}
      >
        inc
      </button>
      <button
        className={'Button'}
        onClick={props.resetValue}
        disabled={props.count === 0 ? true : false}
      >
        reset
      </button>
    </div>
  );
}
