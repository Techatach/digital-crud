import React from "react";
import Todo from "@/models/Todo";
import dbConnect from "@/utils/dbConnect";

export default async function Show() {
  dbConnect();
  const todos = await Todo.find();
  return (
    <main className="ml-10">
      <h1 className="text-xl font-bold">Todos</h1>
      <div>
        <ul className="flex font-bold">
          <li className="flex-1">Title</li>
          <li className="flex-1">Todo</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {todos.map((element) => {
          return (
            <>
              <ul className="flex" key={element._id}>
                <li className="flex-1">{element.title}</li>
                <li className="flex-1">{element.todo}</li>
                <li className="flex-1">
                  <div className="flex">
                    <button className="px-5 py-1 m-1 bg-blue-600 text-white hover:cursor-pointer rounded-lg">
                      Edit
                    </button>

                    <button className="px-5 py-1 m-1 bg-red-600 text-white hover:cursor-pointer rounded-lg">
                      Delete
                    </button>
                  </div>
                </li>
              </ul>
            </>
          );
        })}
      </div>
    </main>
  );
}
