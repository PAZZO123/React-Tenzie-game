export default function App() {
  function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => Math.ceil(Math.random() * 6))
    }
    
    console.log(generateAllNewDice())

     function rollDice() {
        setDice(generateAllNewDice())
    }
    
  return (
    <div className="bg-[#0B2434] p-10 w-120 h-120">
      <div className="h-full w-full bg-amber-50 p-9 rounded-md">
        <h3 className="text-center text-3xl text-[#2B283A] font-semibold">Tenzies</h3>
        <p className="text-center text-gray-600">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className="grid grid-cols-5 justify-between items-center gap-3 py-9">
     
          <button className="p-2 shadow-gray-400 shadow-sm">2</button>
          <button className="p-2 shadow-gray-400 shadow-sm bg-[#59E391]">1</button>
          <button className="p-2 shadow-gray-400 shadow-sm">4</button>
          <button className="p-2 shadow-gray-400 shadow-sm">5</button>
          <button className="p-2 shadow-gray-400 shadow-sm">3</button>
          <button className="p-2 shadow-gray-400 shadow-sm">3</button>
          <button className="p-2 shadow-gray-400 shadow-sm">5</button>
          <button className="p-2 shadow-gray-400 shadow-sm">6</button>
          <button className="p-2 shadow-gray-400 shadow-sm bg-[#59E391]">1</button>
        </div>
        <button className="py-2 px-8 rounded-sm  bg-[#5035FF] text-white self-center block mx-auto ">Roll</button>
      </div>
      
    </div>
  )
}