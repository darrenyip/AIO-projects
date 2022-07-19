import { useState } from "react";
import CateDetail from "./components/CateDetail";
import { StyledCateTitle } from "./todoStyle.style";
import { getAllCate, updateFilter, getCurrentCate } from "./todoSlice";
import { useDispatch, useSelector } from "react-redux";

function Todo(props) {
  const [selectCate, setSelectCate] = useState(null);
  //  --- redux state ----
  const dispatch = useDispatch();
  const currentCategory = useSelector(getCurrentCate);
  const cates = useSelector(getAllCate);

  return (
    <div className="w-full h-screen bg-red-300 flex justify-center items-center">
      <div className="bg-white w-[900px] min-h-[700px] rounded-lg flex ">
        <div className="bg-white border-r-2 border-[#D8D8D8] w-[200px] rounded-bl-lg rounded-tl-lg flex justify-center items-center">
          <div className="flex flex-col gap-[24px]">
            <StyledCateTitle
              active={currentCategory == "All"}
              onClick={() => dispatch(updateFilter({ category: "All" }))}
            >
              All
            </StyledCateTitle>
            {cates &&
              cates.map((el, index) => (
                <StyledCateTitle
                  active={currentCategory == el}
                  key={el + index}
                  onClick={() => dispatch(updateFilter({ category: el }))}
                >
                  {el}
                </StyledCateTitle>
              ))}
          </div>
        </div>

        <div className="py-[30px] pl-[35px] pr-[40px] w-full">
          <CateDetail selectCate={selectCate} />
        </div>
      </div>
    </div>
  );
}

export default Todo;
