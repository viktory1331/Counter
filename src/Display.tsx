import React from 'react';
import './App.css';

type CounterPropsType = {
  count: number;
};

export function Counter(props: CounterPropsType) {
  return (
    <div className={'Display'}>
      <span className={props.count === 5 ? 'valueRed' : 'value'}>
        {props.count}
      </span>
    </div>
  );
}
