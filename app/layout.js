import "@/node_modules/react-modal-video/css/modal-video.css"
import "../public/assets/css/style.css"
import 'swiper/css'
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { figtree, barlowSemiCondensed } from '@/lib/font'
export const metadata = {
    title: 'SAND VISTA BUILDERS & DEVELOPERS',
    description: 'Builders & Developers',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${figtree.variable} ${barlowSemiCondensed.variable}`}>
            <body suppressHydrationWarning={true}>{children}</body>
        </html>
    )
}
