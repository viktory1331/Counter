import React from 'react';
import './App.css';

type ButtonsPropsType = {
  count?: number;
  incValue: () => void;
  resetValue: () => void;
};

export function Buttons(props: ButtonsPropsType) {
  return (
    <div className={'ContainerButtons'}>
      <button className={'Button'} onClick={props.incValue}>
        inc
      </button>
      <button className={'Button'} onClick={props.resetValue}>
        rest
      </button>
    </div>
  );
}
