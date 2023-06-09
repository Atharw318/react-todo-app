import  React  from "react";


const From = ({setInputText,todos,setTodos,inputText, setStatus}) => {
  //here i can write javascript code and function


    const inputTextHandler = (e) =>{
      console.log(e.target.value);
      setInputText(e.target.value);
    };
      const submitTodoHandle = (e) =>{
        e.preventDefault();
        setTodos([
          ...todos,
           { text: inputText, completed: false, 
             id: Math.random() *1000}
        ]);
        setInputText("");
      };
        const statusHandaler = (e) => {
          setStatus(e.target.value);
        }
    return(
      <form>
      <input value={inputText}
       onChange={(e) => inputTextHandler(e)} type="text" className="todo-input" />
      <button onClick={(e) => submitTodoHandle(e)} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={(e) => statusHandaler(e)} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
};



export default From;