"use client";
import React from "react"

import { useContext } from "react"
import { useState } from "react";
import { TodosContext } from './api/todosContext'

import { TodoModelDone, TodoModelNotDone } from './models/todo/todoModel.js'

export default function Home() {
  const [status, setStatus] = useState(false) 

  function changeToShowDone(){
    setStatus(true)
  }

  function changeToShowAll(){
    setStatus('showAll')

  }

  function changetoShowNotDone() {
    setStatus(false)

  }
  const [todos, setTodos] = useState([
    {
      id:1,
      name:'Work',
      status:false
    },
    {
      id:2,
      name:'Study',
      status:true
    },
    {
      id:3,
      name:'Gym',
      status:false
    },
  ])

  return(
    <div className="w-full p-40 h-screen flex items-center justify-center">
      <div className="w-full p-7 rounded-md shadow-lg bg-slate-50">
        <div className="mb-6">
          <h1 className="text-center text-zinc-700 text-3xl font-bold">THINGS TO DO</h1>
        </div>
        <div className="flex">
          <input className="w-10/12 h-10 pl-3 border focus:border-blue-400 outline-none " type="text" placeholder="Add New" />
          <button className=" w-1/3 border bg-white h-10 text-bold hover:bg-blue-400 hover:text-white">ADD</button>
        </div>

        <div className="w-full flex flex-col">
          <div className="my-4">

            {todos.map( (todo, index) => {
              if( todo.status == false){
                return (
                  <TodoModelNotDone key={index} 
                    name={todo.name}
                  />
                )
              }
            })}

            {todos.map( (todo, index) => {
              if( todo.status == true){
                return (
                  <TodoModelDone key={index} 
                    name={todo.name}
                  />
                )
              }
            })}
          </div>
        </div>

        <div className="w-full flex justify-between ">
          <button onClick={changeToShowDone} className="p-1 rounded bg-green-400 text-white hover:bg-green-500 ">Show tasks done</button>
          <button onClick={changeToShowAll} className="p-1 rounded bg-blue-400 text-white hover:bg-blue-500">Show All</button>
          <button onClick={changetoShowNotDone} className="p-1 rounded bg-red-400 text-white hover:bg-red-500">Show tasks not done </button>
        </div>
      </div>
    </div>
  )
}