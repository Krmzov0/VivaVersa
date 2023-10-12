import '@/styles/globals.css'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from 'framer-motion'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <AnimatePresence mode='wait'>
        <motion.div key={router.pathname}>
          <motion.div>
            <Component {...pageProps} />

            <motion.div className='slideIn bg-[#17191b]' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}></motion.div>
            <motion.div className='slideOut bg-[#17191b]'  initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}></motion.div>

          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
