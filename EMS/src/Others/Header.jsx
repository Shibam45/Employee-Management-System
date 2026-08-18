
const Header = () => {
  return (
    <div className="flex items-end justify-between">

      <h1 className="text-2xl text-white font-medium">Hello <br/> <span className="text-3xl font-semibold">Shibam 👋</span></h1>

      <button className="bg-red-500 hover:bg-red-600 active:scale-95 text-black text-lg px-5 py-2 rounded-full">Log Out</button>
    </div>
  )
}

export default Header
