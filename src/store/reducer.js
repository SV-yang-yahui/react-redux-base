import {
  ADD_ITEM,
  REMOVE_ITEM,
  ITEM_NUMBER_PLUS,
  ALL_ITEMS_NUMBER_PLUS,
  LOAD_INTO_LOCALSTORAGE
} from "../action";
import { _ } from "lodash";

/**
 * @param {state} state 的初始化值从持久层localStorage里取；如果localStorage里没有
 * 则为state赋一个defaultState 默认值来做容错
 */

const defaultState = { list: [] };
const initialState =
  JSON.parse(localStorage.getItem("currentValues")) || defaultState;
export default (state = initialState, action) => {
  /**
   * 为了方便项目的健壮性，舍弃JSON二次转换，考虑用lodash,方便后续reducer里做数据的深拷贝
   */
  const updateState = _.cloneDeep(state);
  const { type, index } = action;
  let { list } = updateState;
  if (type === ADD_ITEM) {
    list.push(0);
    return updateState;
  }
  if (type === REMOVE_ITEM) {
    list.splice(index, 1);
    return updateState;
  }
  if (type === ITEM_NUMBER_PLUS) {
    list[index]++;
    return updateState;
  }
  if (type === ALL_ITEMS_NUMBER_PLUS) {
    if (list.length !== 0) {
      const arr = list.map(v => {
        return v + 1;
      });
      updateState.list = _.cloneDeep(arr);
    } else {
      alert("请先添加子项目");
    }
    return updateState;
  }
  if (type === LOAD_INTO_LOCALSTORAGE) {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem("currentValues", stringifiedState);
  }
  return state;
};
