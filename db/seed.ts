import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
	{ userId: 1, userName: 'Rust', userScore: 100},
	{ userId: 2, userName: 'Marty', userScore: 90},
	{ userId: 3, userName: 'Audrey', userScore: 80},
	{ userId: 4, userName: 'Errol', userScore: 70},
	{ userId: 5, userName: 'Thomas', userScore: 60},
	{ userId: 6, userName: 'Maynard', userScore: 50}
])
}
