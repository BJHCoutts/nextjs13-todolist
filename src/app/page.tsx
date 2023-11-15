import Link from "next/link"
import { prisma } from "./db"
import { getTodos } from "../utils/getTodos"
import TodoItem from "../components/TodoItem"
import { TTodoItem } from "./types"

export default async function Home() {

  const todos = await getTodos()

  return (
    <>
      <header className="flex justify-between mb-4">
          <h1 className="text-2x1">Todos</h1>
      </header>
      <Link
          className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          href="/new"
      >New</Link>
      <ul className="pl-4">
        {todos.map(({id, title, complete}:TTodoItem) => (
          <TodoItem key={id} id={id} title={title} complete={complete} />
        ))}
      </ul>
    </>
  )
}
