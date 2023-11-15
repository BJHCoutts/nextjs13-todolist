"use client"

import { TTodoItem } from "../app/types"

interface ITodoItem extends TTodoItem {
	toggleTodo: (id: string, complete: boolean) => void
	deleteTodo: (id:string) => void
}

export default function TodoItem({id, title, complete, toggleTodo, deleteTodo}:ITodoItem) {
	return(<>
	 <li className="flex gap-1 items-center">
		<input id={id} type="checkbox" defaultChecked={complete} onChange={e => toggleTodo(id, e.target.checked)} className='cursor-pointer peer' />
		<label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
		<button onClick={() => deleteTodo(id)}>Delete</button>
	 </li>
	</>)
}