import { useState } from "react"
import Die from "./Components/Die"

export default function App() {
  const [dice, setDice]=useState(generateAllNewDice())
  function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({value:Math.ceil(Math.random() * 6), isFilled:false}))
    }
    
    
    console.log(generateAllNewDice())

     function rollDice() {
        setDice(generateAllNewDice())
    }

     const diceElements = dice.map((num,i )=> <Die value={num.value} key={i} />)
    
    
  return (
    <div className="bg-[#0B2434] p-10 w-120 h-120">
      <div className="h-full w-full bg-amber-50 p-9 rounded-md">
        <h3 className="text-center text-3xl text-[#2B283A] font-semibold">Tenzies</h3>
        <p className="text-center text-gray-600">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 justify-between items-center gap-3 py-9">
     
        {diceElements}
        </div>
        <button className="py-2 px-8 rounded-sm  bg-[#5035FF] text-white self-center block mx-auto   " onClick={rollDice}>Roll</button>
      </div>
      
    </div>
  )
}