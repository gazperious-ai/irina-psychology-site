import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'С чего начать, если я никогда не был на терапии?',
    a: 'Начать можно с первичной консультации — это встреча от одного часа, где мы просто познакомимся и поговорим о том, что вас привело. Никакого давления и обязательств. После неё вы сами решаете, хотите ли продолжать',
  },
  {
    q: 'Как долго обычно длится терапия?',
    a: 'Работа строится максимально сфокусировано. Часто уже 2–3 сессии помогают увидеть причину запроса и почувствовать первые изменения. Для более устойчивого результата обычно достаточно 3–5 сессий от одного часа каждая. Дальше мы смотрим по состоянию и цели клиента',
  },
  {
    q: 'Это не растянется на годы без результата?',
    a: 'Нет. Я не сторонница бесконечной терапии ради процесса. Каждая сессия — от одного часа, работа идёт глубоко с первой встречи. Фокус всегда на конкретном результате: что изменилось, что стало яснее, что стало легче. Если человек готов работать честно — изменения ощутимы быстро',
  },
  {
    q: 'Как проходит онлайн-сессия? Так же эффективно?',
    a: 'Да, онлайн-формат работает не менее эффективно — это подтверждено исследованиями. Нам понадобится только стабильный интернет и тихое место, где вас не побеспокоят. Мы встречаемся в Zoom',
  },
  {
    q: 'Вы соблюдаете конфиденциальность?',
    a: 'Абсолютно. Всё, что происходит на сессиях, остаётся между нами. Я не передаю информацию третьим лицам и не веду записей, доступных кому-либо ещё. Исключение — только угроза жизни',
  },
  {
    q: 'Как записаться?',
    a: 'Напишите мне в Telegram или WhatsApp, и мы выберем удобное время. Обычно ближайшее окно — в течение 2–3 дней',
  },
]

function FAQItem({ q, a, index, inView }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15 + index * 0.07 }}
      className="border-b border-white/6 last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-7 text-left group"
      >
        <span className="text-[#f0ebe3]/75 font-light group-hover:text-[#f0ebe3] transition-colors duration-300 leading-relaxed">
          {q}
        </span>
        <span
          className={`shrink-0 w-5 h-5 rounded-full border border-[#e8e0d5]/20 flex items-center justify-center mt-0.5 transition-all duration-300 ${
            open ? 'border-[#9aae91]/40 bg-[#9aae91]/10' : 'group-hover:border-[#e8e0d5]/35'
          }`}
        >
          <span
            className={`block w-2 h-px bg-[#9aae91] transition-all duration-300 relative ${open ? '' : 'after:absolute after:inset-0 after:rotate-90 after:bg-[#9aae91]'}`}
            style={{
              boxShadow: open ? 'none' : undefined,
            }}
          >
            {!open && (
              <span className="absolute inset-0 w-px h-2 bg-[#9aae91] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            )}
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-[#e8e0d5]/50 leading-relaxed font-light text-sm">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="faq" ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-20">
          <div className="lg:col-span-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="label-text block mb-6"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="heading-serif font-normal leading-tight"
              style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}
            >
              Частые{' '}
              <em className="italic text-[#9aae91]">вопросы</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="mt-6 text-sm text-[#e8e0d5]/35 leading-relaxed font-light"
            >
              Если не нашли ответ — напишите, я отвечу лично
            </motion.p>
          </div>

          <div className="lg:col-span-2">
            {faqs.map((item, i) => (
              <FAQItem key={i} q={item.q} a={item.a} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
