import React from "react";
import Todo from "@/models/Todo";
import dbConnect from "@/utils/dbConnect";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  dbConnect();
  const todos = await Todo.findOne({ _id: params.id });

  //function to save the updated todo
  async function updateTodo(data) {
    "use server";
    let title = data.get("title")?.valueOf();
    let todo = data.get("todo")?.valueOf();
    let updatedTodo = await Todo.findByIdAndUpdate(
      { _id: params.id },
      { title, todo }
    );
    console.log(updatedTodo);
    redirect("/show");
  }
  return (
    <main className="m-10 space-y-5 w-[50%]">
      <h1 className="text-xl font-bold">Create Todo</h1>
      <form action={updateTodo}>
        <div>
          <label htmlFor="title" className="text-lg">
            Title
          </label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            className="w-full bg-slate-200 h-10 p-3"
            defaultValue={todos.title}
          />
        </div>
        <div>
          <label htmlFor="todo" className="text-lg">
            Todo
          </label>
          <br />
          <input
            type="text"
            name="todo"
            id="todo"
            className="w-full bg-slate-200 h-10 p-3"
            defaultValue={todos.todo}
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-green-800 font-bold hover:bg-orange-500 hover:text-white rounded-lg px-5 mt-5 text-white"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
