import './globals.css'
import {  Poppins } from 'next/font/google'
// Components
import Sidebar from '../../components/sidebar'
// Context
import { StoreProvider } from '../../context/StoreProvider.context'

const poppins = Poppins({subsets: ['latin'], weight: ["400", "700", "900"]})



// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.id

//   // fetch data
//   const product = await fetch(`https://.../${id}`).then((res) => res.json())

//   // optionally access and extend (rather than replace) parent metadata
//   const previousImages = (await parent).openGraph?.images || []

//   return {
//     title: product.title,
//     openGraph: {
//       images: ['/some-specific-page-image.jpg', ...previousImages],
//     },
//   }
// }


export const metadata = {
  title: 'Store ',
  description: 'Restaurant store application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StoreProvider> 
          <div className='md:flex container'>
            <aside className='md:w-4/12 xl:w-1/4 2xl:w-1/5'>
              <Sidebar />
            </aside>

            <main className='md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll'>{children}</main>
          </div>
        </StoreProvider>

      </body>
    </html>
  )
}
