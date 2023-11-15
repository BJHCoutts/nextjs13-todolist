import { prisma } from "../app/db"

export function getTodos() {
	return prisma.todo.findMany()
}