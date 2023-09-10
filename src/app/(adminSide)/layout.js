import '../globals.css'
import Image from "next/image";
// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//font
import { Poppins } from 'next/font/google'
const poppins = Poppins({ subsets: ['latin'], weight: ["400", "700", "900"] })


export default function AdminLayout({ children, pagina }) {
  return (
    <>

      <html lang="en">
        <body className={poppins.className}>

          <div className="md:flex" id='__next'>
            <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
              <Image
                width={150}
                height={150}
                src="/assets/img/logo.svg"
                alt="imagen logotipo"
              />
            </aside>

            <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
              <div className="p-10">
                {children}
              </div>
            </main>
          </div>
          <ToastContainer />
        </body>
      </html>



    </>
  );
}