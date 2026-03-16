export default function Die({ value, isheld, hold }) {
  return (
    <button onClick={hold} className={`w-10 h-10 shadow-md  rounded flex items-center justify-center font-bold ${isheld&&"bg-[#59E391]"}`} >
      {value}
    </button>
  )
}