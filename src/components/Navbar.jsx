import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Обо мне', href: '#about' },
  { label: 'С чем работаю', href: '#services' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Отзывы', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3 glass border-b border-white/5' : 'py-4 sm:py-6'
        }`}
        style={{
          paddingTop: `max(${scrolled ? '12px' : '16px'}, env(safe-area-inset-top))`,
        }}
      >
        <div className="container-wide px-5 sm:px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="heading-serif text-lg sm:text-xl tracking-wide shrink-0">
            Ирина Зарудняк
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#e8e0d5]/60 hover:text-[#e8e0d5] transition-colors duration-300 tracking-wide"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#cta"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Записаться
          </a>

          {/* Burger — larger touch target */}
          <button
            className="md:hidden flex flex-col gap-[5px] p-3 -mr-2"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            style={{ touchAction: 'manipulation' }}
          >
            <span
              className={`block w-5 h-px bg-[#e8e0d5]/70 transition-all duration-300 origin-center ${
                open ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#e8e0d5]/70 transition-all duration-300 ${
                open ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-px bg-[#e8e0d5]/70 transition-all duration-300 origin-center ${
                open ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile menu — full screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40"
            style={{ background: 'rgba(15,14,12,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.05 }}
              className="flex flex-col items-center justify-center h-full gap-2 px-8"
              style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
            >
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="heading-serif text-2xl sm:text-3xl text-[#f0ebe3]/70 hover:text-[#f0ebe3] active:text-[#9aae91] transition-colors py-3 w-full text-center"
                  style={{ touchAction: 'manipulation' }}
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="#cta"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="btn-primary mt-6 w-full max-w-xs text-center"
                style={{ touchAction: 'manipulation' }}
              >
                Записаться
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
