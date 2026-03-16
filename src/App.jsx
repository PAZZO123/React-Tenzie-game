import { nanoid } from "nanoid"
import { useState } from "react"
import Confetti from "react-confetti"
import Die from "./Components/Die"

export default function App() {
   function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({value:Math.ceil(Math.random() * 6), isFilled:false, id:nanoid()}))
    }
  const [dice, setDice]=useState(()=>generateAllNewDice())
 
 
 const GameWon = dice.every(die => die.isFilled) &&
        dice.every(die => die.value === dice[0].value)
    
    console.log(generateAllNewDice())

     function rollDice() {
        setDice(old=>old.map(die=>die.isFilled?die:{...die, value:Math.ceil(Math.random()*6)}))
    }
    function hold(id){
     setDice(prev=>prev.map(el=>el.id===id?({...el, isFilled:!el.isFilled}):el))
    }

     const diceElements = dice.map((num )=> <Die 
     value={num.value} 
     key={num.id}
     isheld={num.isFilled}
     hold={()=>hold(num.id)}/>)
    
    
  return (
    <div className="bg-[#0B2434] p-10 w-120 h-120">
     
      <div className="h-full w-full bg-amber-50 p-9 rounded-md">
        <main>{GameWon&&<Confetti/>}</main>
        <h3 className="text-center text-3xl text-[#2B283A] font-semibold">Tenzies</h3>
        <p className="text-center text-gray-600">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 justify-between items-center gap-3 py-9">     
        {diceElements}
        </div>
        <button className="py-2 px-8 rounded-sm  bg-[#5035FF] text-white self-center block mx-auto   " onClick={rollDice}>{GameWon?"Start Game":"Roll"}</button>
      </div>
      
    </div>
  )
}