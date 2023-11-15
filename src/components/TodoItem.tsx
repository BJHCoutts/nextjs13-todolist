import { TTodoItem } from "../app/types"

export default function TodoItem({id, title, complete}:TTodoItem) {
	return(<>
	 <li className="flex gap-1 items-center">
		<input id={id} type="checkbox" className='cursor-pointer peer' />
		<label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500">{title}</label>
	 </li>
	</>)
}