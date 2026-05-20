import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  {
    num: '01',
    title: 'Первая встреча',
    desc: 'Знакомство, ваш запрос, ожидания от терапии — без оценки и давления',
  },
  {
    num: '02',
    title: 'Прояснение запроса',
    desc: 'Совместно формулируем, над чем хотите работать — иногда истинный запрос открывается не сразу',
  },
  {
    num: '03',
    title: 'Регулярная работа',
    desc: 'Еженедельные сессии — постепенно глубже, через диалог, телесный опыт, осознание',
  },
  {
    num: '04',
    title: 'Интеграция',
    desc: 'Новые паттерны входят в жизнь — изменения становятся устойчивыми, а не временными',
  },
]

export default function Approach() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="approach" ref={ref} className="section-padding">
      <div className="container-wide">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-20 items-end">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="label-text block mb-6"
            >
              Подход
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="heading-serif font-normal leading-tight"
              style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
            >
              Как устроена{' '}
              <em className="italic text-[#9aae91]">наша работа</em>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-[#e8e0d5]/50 leading-relaxed font-light lg:max-w-sm"
          >
            Терапия — это не быстрые советы. Это медленный, но настоящий процесс,
            в котором вы постепенно получаете доступ к себе
          </motion.p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-7 left-full w-full h-px hidden lg:block"
                  style={{
                    background: 'linear-gradient(90deg, rgba(232,224,213,0.08), transparent)',
                    width: 'calc(100% - 2rem)',
                    left: 'calc(100% - 1rem)',
                  }}
                />
              )}

              <div className="glass rounded-2xl p-5 sm:p-7 h-full">
                <span className="label-text text-[11px] block mb-5">{s.num}</span>
                <h3 className="heading-serif text-xl font-normal mb-3 text-[#f0ebe3]/90">
                  {s.title}
                </h3>
                <p className="text-sm text-[#e8e0d5]/45 leading-relaxed font-light">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-8 sm:mt-12 pt-8 sm:pt-10 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center gap-5 sm:gap-6 justify-between"
        >
          <p className="text-sm text-[#e8e0d5]/35 max-w-md leading-relaxed font-light">
            Работаю в парадигме гештальт-терапии, телесно-ориентированного подхода
            и психологии самопознания — каждая сессия от одного часа
          </p>
          <a href="#cta" className="btn-ghost shrink-0">
            Задать вопрос
          </a>
        </motion.div>
      </div>
    </section>
  )
}
