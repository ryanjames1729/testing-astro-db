import { db, User } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	await db.insert(User).values([
	{ userId: 1, userName: 'Boots', userScore: 0}
])
}
