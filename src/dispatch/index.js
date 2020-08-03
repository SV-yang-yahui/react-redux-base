import {
  ADD_ITEM,
  REMOVE_ITEM,
  ITEM_NUMBER_PLUS,
  ALL_ITEMS_NUMBER_PLUS,
  LOAD_INTO_LOCALSTORAGE
} from "../action";
const dispatchToProps = dispatch => {
  return {
    addItem() {
      const action = {
        type: ADD_ITEM
      };
      dispatch(action);
    },
    removeItem(index) {
      const action = {
        type: REMOVE_ITEM,
        index
      };
      dispatch(action);
    },
    itemNumberPlus(index) {
      const action = {
        type: ITEM_NUMBER_PLUS,
        index
      };
      dispatch(action);
    },
    allItemsNumberPlus() {
      const action = {
        type: ALL_ITEMS_NUMBER_PLUS
      };
      dispatch(action);
    },
    loadIntoLocastorage() {
      const action = {
        type: LOAD_INTO_LOCALSTORAGE
      };
      dispatch(action);
    }
  };
};

export default dispatchToProps;
