import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    name: 'Мария',
    role: 'Дизайнер, 31 год',
    text: 'Я пришла с паническими атаками, а ушла — с другим пониманием себя. Ирина помогла мне не просто справляться с тревогой, но понять, откуда она берётся. Год работы изменил мою жизнь по-настоящему.',
    duration: '1 год в терапии',
  },
  {
    name: 'Алексей',
    role: 'Менеджер, 38 лет',
    text: 'Обратился, когда чувствовал полное выгорание. Думал, что это просто усталость. Оказалось — целый пласт нерешённого. Ирина работает без лишних слов, точно и с уважением к темпу человека.',
    duration: '8 месяцев в терапии',
  },
  {
    name: 'Елена',
    role: 'Предприниматель, 44 года',
    text: 'Долго не решалась идти к психологу — казалось, это для тех, у кого «что-то не так». Сейчас смеюсь над этим. Это просто забота о себе. Ирина стала для меня надёжной точкой опоры в сложный период.',
    duration: '2 года в терапии',
  },
  {
    name: 'Дарья',
    role: 'Врач, 29 лет',
    text: 'Я искала специалиста долго. Важно было, чтобы не было шаблонов и банальностей. С Ириной каждая сессия — как путешествие вглубь себя. Она слышит то, что я сама не произношу.',
    duration: '5 месяцев в терапии',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="mb-10 sm:mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="label-text block mb-6"
          >
            Отзывы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-serif font-normal leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
          >
            Что говорят{' '}
            <em className="italic text-[#9aae91]">те, кто уже работал</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          {/* Main testimonial */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2 glass rounded-2xl p-6 sm:p-10 relative overflow-hidden">
              <div
                className="absolute top-8 left-8 text-7xl leading-none font-serif text-[#9aae91]/10 select-none"
              >
                "
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="text-base sm:text-lg md:text-xl font-light text-[#f0ebe3]/80 leading-relaxed mb-6 sm:mb-8 relative z-10">
                    {testimonials[active].text}
                  </p>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-10 h-10 rounded-full shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #3a3632, #2a2825)',
                        border: '1px solid rgba(232,224,213,0.08)',
                      }}
                    />
                    <div>
                      <p className="text-sm font-medium text-[#f0ebe3]/80">{testimonials[active].name}</p>
                      <p className="text-xs text-[#e8e0d5]/35">{testimonials[active].role}</p>
                    </div>
                    <div className="ml-auto label-text text-[10px]">{testimonials[active].duration}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation cards */}
            <div className="flex flex-col gap-3">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`text-left rounded-xl p-5 transition-all duration-300 ${
                    i === active
                      ? 'glass border border-[#9aae91]/20'
                      : 'border border-transparent hover:border-white/5'
                  }`}
                >
                  <p className="text-sm font-medium text-[#f0ebe3]/70 mb-0.5">{t.name}</p>
                  <p className="text-xs text-[#e8e0d5]/30">{t.role}</p>
                  {i === active && (
                    <div className="mt-2 w-6 h-px bg-[#9aae91]/60 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-[#e8e0d5]/20 text-center leading-relaxed">
            Имена изменены с согласия клиентов. Конфиденциальность — обязательное условие нашей работы
          </p>
        </motion.div>
      </div>
    </section>
  )
}
