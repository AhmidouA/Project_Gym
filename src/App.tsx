import Navbar from '@/scenes/navbar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';


function App() {

  // Css variable
  const flexBetween = "flex items-center justify-between" ;

  return (
    <div className='app bg-gray-20'>
      <Navbar />
    </div>
  )
}

export default App
