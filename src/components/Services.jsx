import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    icon: '◈',
    title: 'Тревога и стресс',
    desc: 'Хроническое беспокойство, панические атаки, ощущение потери контроля — работаем с корнями, а не симптомами',
  },
  {
    icon: '◇',
    title: 'Отношения',
    desc: 'Конфликты в паре, трудности с близостью, повторяющиеся паттерны в отношениях с людьми',
  },
  {
    icon: '○',
    title: 'Самооценка и идентичность',
    desc: 'Неуверенность, ощущение пустоты или потерянности, вопрос «кто я» и «чего я хочу»',
  },
  {
    icon: '△',
    title: 'Депрессивные состояния',
    desc: 'Апатия, потеря смысла, усталость от жизни — поддержка и работа с тем, что лежит в основе',
  },
  {
    icon: '□',
    title: 'Травма и потери',
    desc: 'Болезненный опыт прошлого, горе, переживания, которые продолжают влиять на настоящее',
  },
  {
    icon: '◎',
    title: 'Личный рост',
    desc: 'Желание жить более осознанно, понять свои ценности, найти смысл и двигаться к тому, что важно',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="label-text block mb-6"
          >
            С чем работаю
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-serif font-normal leading-tight max-w-xl"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
          >
            Темы, которые мы можем{' '}
            <em className="italic text-[#9aae91]">исследовать вместе</em>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="glass glass-hover rounded-2xl p-5 sm:p-8 group cursor-default"
            >
              <span
                className="block text-2xl mb-6 text-[#9aae91]/60 group-hover:text-[#9aae91] transition-colors duration-300"
                style={{ fontFamily: 'serif' }}
              >
                {s.icon}
              </span>
              <h3 className="heading-serif text-lg font-normal mb-3 text-[#f0ebe3]/90">
                {s.title}
              </h3>
              <p className="text-sm text-[#e8e0d5]/45 leading-relaxed font-light">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
