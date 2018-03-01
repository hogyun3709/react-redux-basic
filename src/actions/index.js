import * as types from './ActionType';

export function increment(){
  return {
    type: types.INCREMENT
  };
}

export function decrement(){
  return {
    types: types.DECREMENT
  };
}

export function setColor(color){
  return {
    type: types.SET_COLOR,
    color
  };
}
