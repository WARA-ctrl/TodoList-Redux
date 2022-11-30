import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "../actions";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>
              <h1>Todo List</h1>
              <h3>using React and Redux</h3>
            </figcaption>
          </figure>

          <div className="addItem">
            <input
              type="text"
              placeholder="Add your list here!"
              value={inputData}
              onChange={(event) => setInputData(event.target.value)}
            />
            <AiOutlinePlus
              className="fa fa-plus add-btn"
              onClick={() => dispatch(addTodo(inputData), setInputData(""))}
            ></AiOutlinePlus>

            <div className="showItems">
              {list.map((elem) => {
                return (
                  <div className="eachItem" key={elem.id}>
                    <h3>{elem.data}</h3>
                    <AiOutlineClose
                      className="fa fa-trash-alt delete-btn"
                      //   title="Delete item"
                      onClick={() => dispatch(deleteTodo(elem.id))}
                    ></AiOutlineClose>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
