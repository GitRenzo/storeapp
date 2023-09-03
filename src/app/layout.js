import './globals.css'
import { Poppins } from 'next/font/google'
// Components
import Sidebar from '../../components/sidebar'
// Context
import { StoreProvider } from '../../context/StoreProvider.context'
// Modal
import ModalContent from '../../components/modal';
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// steps
import Steps from '../../components/steps';

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700", "900"] })


export const metadata = {
  title: 'Store ',
  description: 'Restaurant store application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider>
          <div className='md:flex container' id='__next'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
              <Sidebar />
            </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>
              <div className='p-10'>
                <Steps/>
                {children}
                <ModalContent />
                <ToastContainer/>
              </div>
            </main>
          </div>
        </StoreProvider>

      </body>
    </html>
  )
}
