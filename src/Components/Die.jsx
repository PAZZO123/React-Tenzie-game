export default function Die({ value }) {
  return (
    <button className="w-10 h-10 shadow-md  rounded flex items-center justify-center font-bold">
      {value}
    </button>
  )
}