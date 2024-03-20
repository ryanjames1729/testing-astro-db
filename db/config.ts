import { defineDb, defineTable, column } from 'astro:db';

// https://astro.build/db/config

const User = defineTable({
  columns: {
    userId: column.number({ primaryKey: true}),
    userName: column.text(),
    userScore: column.number(),
  },
  })

export default defineDb({
  tables: { User },
});
