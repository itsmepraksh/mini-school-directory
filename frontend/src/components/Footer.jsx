
import { Link } from 'react-router-dom'

const Footer = () => { 
  return (
      <footer className="border-t border-zinc-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
          <p className="text-sm text-zinc-400">
            © {new Date().getFullYear()} SchoolScope. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-zinc-400">
            <Link to={"/lost"}  className="hover:text-emerald-400"  aria-label="Privacy Policy">
              Privacy
            </Link>
            <Link to={"/lost"} className="hover:text-emerald-400"   aria-label="Terms of Service">
              Terms
            </Link>
            <Link to={"/lost"} className="hover:text-emerald-400"  aria-label="Contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer