 
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()
  return (
    <header className="border-b border-zinc-700">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-emerald-500/20 grid place-items-center">
              <span className="text-emerald-400 font-bold">Σ</span>
            </div>
            <span className="text-lg font-semibold tracking-wide">SchoolScope</span>
          </div>
          <ul className="hidden gap-7 text-sm md:flex">
            <li onClick={()=>navigate('/home')} className="hover:text-emerald-400 cursor-pointer">Home</li>
            <li onClick={()=>navigate('/lost')} className="hover:text-emerald-400 cursor-pointer">Schools</li>
            <li onClick={()=>navigate('/lost')} className="hover:text-emerald-400 cursor-pointer">About</li>
            <li onClick={()=>navigate('/lost')} className="hover:text-emerald-400 cursor-pointer">Contact</li>
          </ul>
          <div className="flex items-center gap-3">
            <button onClick={()=>navigate('/lost')} className="hidden rounded-xl border border-zinc-600 px-4 py-2 text-sm hover:border-zinc-500 md:block">
              Sign in
            </button>
            <button onClick={()=>navigate('/addSchool')} className="rounded-xl bg-emerald-500 px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-emerald-400">
              Add School
            </button>
          </div>
        </nav>
      </header>
  )
}

export default Navbar