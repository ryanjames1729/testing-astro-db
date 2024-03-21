import { useState } from 'react'

import { db, User, like } from 'astro:db';
const users = await db.select().from(User);


async function getNames(name: string) {
    let nameReturn = [] 
    for(let i = 0; i < users.length; i++) {
        if(users[i].userName === name) {
            nameReturn.push(users[i])
        }
    }
    return nameReturn;
}

export default function ReadForm() {

    const [readName, setReadName] = useState('')
    const [usernames, setUsernames]: any = useState([])

    return (
        <>
    <form className="flex flex-col items-center justify-center" onSubmit={async (event) => {
        event.preventDefault()
        console.log(readName)
        const names = getNames(readName) 
        setUsernames(await names);
      }}>
      <label htmlFor="read" className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-center lg:text-4xl">Read</span>
        <input type="text" name="readName" id="readName" placeholder="Read Name goes here" className="w-96 h-12 p-4 mt-4 border border-gray-300 rounded-lg dark:border-gray-700 text-slate-700" value={readName} onChange={e => setReadName(e.target.value)}/>
        <span className="w-96 h-12 p-4 mt-4"></span>
        <button type="submit" className="w-96 h-12 mt-4 bg-blue-500 rounded-lg text-white">Read</button>
      </label>
    </form>
    <div>
      {usernames.map((user: any) => {
        return <div key={user.id}>{user.userName}</div>
      })}
      </div>
    </>
    )
}