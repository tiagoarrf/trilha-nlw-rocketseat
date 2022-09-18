import "./styles/main.css"
import logoImg from "./assets/logo.svg"

function App() {

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-8">
      <img className="h-40" src={logoImg} alt="" />
      <h1 className="text-5xl text-white font-black">Seu <span className="bg-nlw-gradiente text-transparent bg-clip-text">duo</span> está aqui!</h1>
      <div className="grid grid-cols-6 gap-6 mt-8">
        <a href="" className="relative">
          <img src="./src/assets/game1.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Leag of Legnds</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./src/assets/game2.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./src/assets/game3.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./src/assets/game4.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Apex Legnds</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./src/assets/game5.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative">
          <img src="./src/assets/game6.png" alt="" />
          <div className="w-full pt-8 pb-4 px-4 bg-game-gradiente absolute bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">World Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 anúncios</span>
          </div>
        </a>
      </div>

      <div className="bg-[#2A2634] px-8 py-6 self-stretch mt-4">

      </div>
    </div>
  )
}

export default App
