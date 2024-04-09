import React from "react";
import Todo from "@/models/Todo";
import dbConnect from "@/utils/dbConnect";
import Link from "next/link";
import { redirect } from "next/navigation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default async function Show() {
  dbConnect();
  const todos = await Todo.find();

  //Function to delete todo
  async function deleteTodo(data) {
    "use server";
    let id = JSON.parse(data.get("id")?.valueOf());

    await Todo.deleteOne({ _id: id });
    redirect("/show");
  }

  return (
    <main className="ml-10">
      <h1 className="text-xl font-bold">การประเมินนโยบายสาธารณะ</h1>
      <div className="">
        <ul className="flex font-bold">
          <li className="flex-1">Title</li>
          <li className="flex-1">Todo</li>
          <li className="flex-1">Options</li>
        </ul>
        <hr />
        {todos.map((element) => {
          return (
            <div className="">
              <ul className="flex" key={element._id}>
                <li className="flex-1">{element.title}</li>
                <li className="flex-1">{element.todo}</li>
                <li className="flex-1">
                  <div className="flex">
                    <Link href={"/edit/" + element._id}>
                      <button className="px-3 py-1 m-1 bg-blue-600 text-white hover:cursor-pointer rounded-lg">
                        {/* Edit */}
                        <EditIcon />
                      </button>
                    </Link>
                    <form action={deleteTodo}>
                      <input
                        type="hidden"
                        name="id"
                        id="id"
                        value={JSON.stringify(element._id)}
                      />
                      <button
                        className="px-3 py-1 m-1 bg-red-600 text-white hover:cursor-pointer rounded-lg"
                        type="submit"
                      >
                        {/* Delete */}
                        <DeleteIcon />
                      </button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </main>
  );
}
