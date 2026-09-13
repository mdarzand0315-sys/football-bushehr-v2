import './globals.css'
import Header from '../components/Header'

export const metadata = {
 title:'فوتبال بوشهر',
 description:'هیأت فوتبال استان بوشهر'
}

export default function RootLayout({children}:{children:React.ReactNode}){
 return (
  <html lang="fa" dir="rtl">
   <body>
    <Header />
    {children}
   </body>
  </html>
 )
}
