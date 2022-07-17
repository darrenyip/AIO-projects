import { TaskList } from "./todoData";
import { useState, useEffect } from "react";
import CateDetail from "./components/CateDetail";
import { StyledCateTitle } from "./todoStyle.style";

function Todo(props) {
  const [allTasks, setAllTasks] = useState(TaskList);
  const [selectCate, setSelectCate] = useState(null);
  const [allCategories, setAllCategories] = useState(null);
  const setAllCaties = () => {
    const caties = new Set();
    allTasks.forEach((el) => {
      if (el.category !== "Uncategorized") caties.add(el.category);
    });
    console.log("all caties: ", [...caties]);
    const catiesArr = [...caties];
    setAllCategories(catiesArr);
  };
  useEffect(() => {
    setAllCaties();
  }, []);

  const addNewTask = (task) => {
    console.log("add new task: ", task, allTasks);
    const taskCopy = JSON.parse(JSON.stringify(allTasks));
    taskCopy.push(task);
    setAllTasks(taskCopy);
  };
  const handleFinished = (task) => {
    console.log("!!!!------");
    const taskCopy = JSON.parse(JSON.stringify(allTasks));
    taskCopy.forEach((old) => {
      if (old.task === task.task) {
        old.completed = !old.completed;
        console.log(old.completed);
      }
    });
    setAllTasks(taskCopy);
  };
  return (
    <div className="w-full h-screen bg-red-300 flex justify-center items-center">
      <div className="bg-white w-[900px] min-h-[700px] rounded-lg flex ">
        <div className="bg-white border-r-2 border-[#D8D8D8] w-[200px] rounded-bl-lg rounded-tl-lg flex justify-center items-center">
          <div className="flex flex-col gap-[24px]">
            <StyledCateTitle
              active={selectCate == null}
              onClick={() => setSelectCate(null)}
            >
              All
            </StyledCateTitle>
            {allCategories &&
              allCategories.map((el, index) => (
                <StyledCateTitle
                  active={selectCate == el}
                  key={el + index}
                  onClick={() => setSelectCate(el)}
                >
                  {el}
                </StyledCateTitle>
              ))}
          </div>
        </div>

        <div className="py-[30px] pl-[35px] pr-[40px] w-full">
          <CateDetail
            allTasks={allTasks}
            selectCate={selectCate}
            onAddNewTask={addNewTask}
            onHandleFinished={handleFinished}
          />
        </div>
      </div>
    </div>
  );
}

export default Todo;
