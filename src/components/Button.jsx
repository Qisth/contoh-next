export default function ButtonKlik({handleKlik}) {
  return (
    <button
      onClick={handleKlik} 
      className="border border-gray-700 bg-gray-300 px-3 py-2 cursor-pointer rounded-md"
    >Klik Aku
    </button>
  )
}