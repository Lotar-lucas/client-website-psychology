import girassolImage from '../assets/girassol-very-small.png'

const Header = () => {
  return (
   <header className="flex flex-row  justify-around bg-[#003366] shadow-md w-full fixed top-0 left-0 ">
       <div className="flex max-w-7xl shrink-0 pl-6">
          <div className="flex items-center gap-2 whitespace-nowrap">

            <img src={girassolImage} alt="Logo girassol" className='max-h-22 max-w-26'/>

            <div className='flex flex-col items-start'>
                <span className="text-[1.286rem] font-serif font-bold text-white">Thais Ferraz Pazzin</span>

                <span className="text-1xl italic text-white">Psicóloga | CRP 07/38927</span>
            </div>
          </div>
      </div>

      <div className="container max-w-7xl flex justify-end items-center py-2 px-12">
         <nav>
           <ul className="flex gap-5 justify-end whitespace-nowrap">
             <li>
               <a
                 href="#"
                 className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
               >
                 Início
               </a>
             </li>

             <li>
               <a
                 href="#about"
                 className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors"
               >
                 Sobre mim
               </a>
             </li>

             <li>
               <a
                 href="#psychotherapy"
                 className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors "
               >
                 Psicoterapia
               </a>
             </li>

             <li>
               <a
                 href="#workshops"
                 className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors "
               >
                 Palestras e Workshops
               </a>
             </li>

             <li>
               <a
                 href="#contact"
                 className="px-4 py-2 rounded-full text-yellow-300 hover:bg-yellow-400 hover:text-white hover:font-bold transition-colors "
               >
                 Contato
               </a>
             </li>
           </ul>
         </nav>
       </div>
   </header>
  )
}

export default Header