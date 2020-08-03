import React, { Fragment } from "react";
import "./styles.css";
import { connect } from "react-redux";
import "antd/dist/antd.css";
import dispatchToProps from "./dispatch";
import stateToProps from "./state";
function List(props) {
  const {
    list,
    allItemsNumberPlus,
    addItem,
    itemNumberPlus,
    removeItem,
    loadIntoLocastorage
  } = props;
  return (
    <div className="App">
      <h1>简单计数器</h1>
      <h2>功能点：序列化与反序列化，刷新回显 (基于react-redux)</h2>
      <h3>作者：杨亚辉-前端工程师-两年</h3>
      <hr />
      <button onClick={allItemsNumberPlus}>+</button>
      <button onClick={addItem}>新增</button>
      <br />
      <br />
      <button onClick={loadIntoLocastorage}>保存到 localStorage</button>
      <br />
      <br />
      {list.length === 0 ? (
        <span>"暂无数据, 请点击新增-按钮添加数据"</span>
      ) : (
        list.map((num, index) => (
          <Fragment key={index}>
            {num}
            <button onClick={itemNumberPlus.bind(this, index)}>+</button>
            <button onClick={removeItem.bind(this, index)}>删除</button>
            <br />
          </Fragment>
        ))
      )}
    </div>
  );
}

/**
 * @param{ stateToProps,dispatchToProps}
 * 这里使用高阶函数+函数柯里化，通过柯里化参数stateToProps,
 * dispatchToProps为函数组件 List的props 注入 state和dispatch属性，
 * 方便List组件直接从props里取
 */
export default connect(
  stateToProps,
  dispatchToProps
)(List);
