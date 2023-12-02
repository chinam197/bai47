import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
//
import BtnAddColumn from "./BtnAddColumn";
import { getTask } from "../middlewares/getTaskMiddlewares";
import { trelloTable } from "../redux/slice/trelloTable";

//
const Board = () => {
  const dispatch = useDispatch();
  const { setTask, setColumn } = trelloTable.actions;
  const tableColums = useSelector((state) => state.trelloTable.columns);
  const tableTasks = useSelector((state) => state.trelloTable.tasks);

  useEffect(() => {
    dispatch(getTask());
  }, []);

  return (
    <div
      className="
  m-auto
  flex
  min-h-screen
  w-full
  items-center
  overflow-x-auto
  overflow-y-hidden
  px-[40px]
    "
    >
      <div className="m-auto flex gap-4">
        {tableColums.length &&
          tableColums.map(({ _id }) => {
            return (
              <div className="flex gap-4" key={_id}>
                <div
                  className="
  bg-columnBackgroundColor
  w-[350px]
  h-[500px]
  max-h-[500px]
  rounded-md
  flex
  flex-col
  "
                  style={{}}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    aria-disabled="false"
                    aria-roledescription="sortable"
                    aria-describedby="DndDescribedBy-0"
                    className="
bg-mainBackgroundColor
text-md
h-[60px]
cursor-grab
rounded-md
rounded-b-none
p-3
font-bold
border-columnBackgroundColor
border-4
flex
items-center
justify-between
"
                  >
                    <div className="flex gap-2">
                      <div
                        className="
  flex
  justify-center
  items-center
  bg-columnBackgroundColor
  px-2
  py-1
  text-sm
  rounded-full
  "
                      >
                        0
                      </div>
                      Column 4
                    </div>
                    <button
                      className="
  stroke-gray-500
  hover:stroke-teal
  hover:bg-columnBackgroundColor
  rounded
  px-1
  py-2
  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="flex flex-grow flex-col gap-4 p-2 overflow-x-hidden overflow-y-auto">
                    <div
                      role="button"
                      tabIndex={0}
                      aria-disabled="false"
                      aria-roledescription="sortable"
                      aria-describedby="DndDescribedBy-0"
                      className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-teal-500 cursor-grab relative task"
                      style={{}}
                    >
                      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words">
                        Task 21
                      </p>
                    </div>
                  </div>
                  <button className="flex gap-2 items-center border-columnBackgroundColor border-2 rounded-md p-4 border-x-columnBackgroundColor hover:bg-mainBackgroundColor hover:text-teal-500 active:bg-teal-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Add task
                  </button>
                </div>
              </div>
            );
          })}

        <BtnAddColumn />
      </div>

      <div id="DndDescribedBy-0" style={{ display: "none" }}>
        To pick up a draggable item, press the space bar. While dragging, use
        the arrow keys to move the item. Press space again to drop the item in
        its new position, or press escape to cancel.
      </div>
      <div
        id="DndLiveRegion-0"
        role="status"
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "fixed",
          width: 1,
          height: 1,
          margin: "-1px",
          border: 0,
          padding: 0,
          overflow: "hidden",
          clip: "rect(0px, 0px, 0px, 0px)",
          clipPath: "inset(100%)",
          whiteSpace: "nowrap",
        }}
      >
        Draggable item 3920 was dropped over droppable area 2243
      </div>
    </div>
  );
};

export default Board;
