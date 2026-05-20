import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function Hero() {
  return (
    <section className="relative h-[100svh] flex flex-col overflow-hidden">

      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(154,174,145,0.06) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,200,188,0.05) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Dark premium grid */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(232,224,213,1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(232,224,213,1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* ── Content ──
          flex-col + pt clears the fixed navbar.
          Inner div is flex-1 so it fills remaining height.
          mt-auto on stats pushes them to the bottom.
      ── */}
      <div
        className="relative z-10 flex flex-col flex-1 container-wide px-5 sm:px-6 md:px-12 lg:px-24"
        style={{ paddingTop: 'clamp(5rem, 11vh, 8rem)' }}
      >
        {/* Main copy block */}
        <div className="max-w-4xl">
          {/* Label */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-4 mb-5 sm:mb-8">
            <span className="label-text">Психолог · Личная практика</span>
            <div className="divider rotate-90 origin-center" />
            <span className="label-text">Онлайн</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.25)}
            className="heading-serif font-normal leading-[1.1] mb-4 sm:mb-6"
            style={{ fontSize: 'clamp(2.6rem, 5.5vw, 5rem)' }}
          >
            Пространство,{' '}
            <em className="italic text-[#9aae91]">где вас слышат</em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-[#e8e0d5]/55 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-xl mb-8 sm:mb-10"
          >
            Индивидуальная психотерапия для тех, кто готов к глубокой работе с собой.
            Без шаблонов — только то, что важно именно вам.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-3 sm:gap-4 items-center">
            <a href="#cta" className="btn-primary">
              Записаться на консультацию
            </a>
            <a href="#about" className="btn-ghost">
              Узнать больше
            </a>
          </motion.div>
        </div>

        {/* Stats — прижаты к низу через mt-auto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75, ease: 'easeOut' }}
          className="mt-auto pt-7 sm:pt-9 pb-10 sm:pb-14 border-t border-white/6 flex flex-wrap gap-10 sm:gap-16 md:gap-20"
        >
          {[
            { num: '9+', label: 'лет практики' },
            { num: '400+', label: 'клиентов' },
            { num: '3000+', label: 'часов терапии' },
          ].map(({ num, label }) => (
            <div key={label}>
              <p className="heading-serif text-4xl sm:text-5xl font-light text-[#f0ebe3] mb-0.5">
                {num}
              </p>
              <p className="text-xs sm:text-sm text-[#e8e0d5]/40 tracking-wide">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 right-12 hidden md:flex flex-col items-center gap-3"
      >
        <span className="label-text text-[10px]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-[#9aae91]/60 to-transparent"
        />
      </motion.div>
    </section>
  )
}
