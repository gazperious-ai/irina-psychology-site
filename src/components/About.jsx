import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const PHOTO_SRC = '/images/2026-05-20 18.05.26.jpg'


export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [photoLoaded, setPhotoLoaded] = useState(false)
  const [photoError, setPhotoError] = useState(false)

  const fadeUp = (i = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-24 items-center">

          {/* Photo — shorter on mobile to avoid dominating the viewport */}
          <motion.div {...fadeUp(0)} className="relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #1e1c19 0%, #252320 50%, #1a1917 100%)',
                /* 4:5 ratio on mobile (not as tall), 3:4 on lg */
                aspectRatio: '4/5',
                maxHeight: 'min(70vh, 560px)',
              }}
            >
              {/* Real photo */}
              {!photoError && (
                <img
                  src={PHOTO_SRC}
                  alt="Ирина Зарудняк — психолог"
                  onLoad={() => setPhotoLoaded(true)}
                  onError={() => setPhotoError(true)}
                  className="absolute inset-0 w-full h-full transition-opacity duration-700"
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    opacity: photoLoaded ? 1 : 0,
                    filter: 'saturate(0.85) brightness(0.92)',
                  }}
                />
              )}

              {/* Gradient overlay поверх фото */}
              {!photoError && photoLoaded && (
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(15,14,12,0.75) 0%, rgba(15,14,12,0.1) 50%, transparent 100%)',
                  }}
                />
              )}

              {/* Placeholder */}
              {(photoError || !photoLoaded) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-20 h-20 sm:w-28 sm:h-28 rounded-full mx-auto mb-4"
                      style={{
                        background: 'linear-gradient(135deg, #3a3632 0%, #2a2825 100%)',
                        border: '1px solid rgba(232,224,213,0.08)',
                      }}
                    />
                    <p className="label-text text-[10px]">
                      {photoError ? 'Добавьте about.jpg в /public/images/' : 'Загрузка...'}
                    </p>
                  </div>
                </div>
              )}

              {/* Glass name card */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 glass rounded-xl p-4 sm:p-5">
                <p className="heading-serif text-base sm:text-lg mb-0.5 sm:mb-1">Ирина Зарудняк</p>
                <p className="text-xs sm:text-sm text-[#e8e0d5]/50">Клинический психолог · Гештальт-терапевт</p>
              </div>

              {/* Accent line */}
              <div
                className="absolute top-4 sm:top-6 left-4 sm:left-6 w-10 sm:w-12 h-0.5 rounded-full"
                style={{ background: 'linear-gradient(90deg, #9aae91, transparent)' }}
              />
            </div>
          </motion.div>

          {/* Text content */}
          <div>
            <motion.span {...fadeUp(0.1)} className="label-text block mb-5 sm:mb-6">
              Обо мне
            </motion.span>

            <motion.h2
              {...fadeUp(0.2)}
              className="heading-serif font-normal leading-tight mb-5 sm:mb-8"
              style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
            >
              Создаю безопасное пространство для{' '}
              <em className="italic text-[#9aae91]">настоящих изменений</em>
            </motion.h2>

            <motion.div
              {...fadeUp(0.3)}
              className="space-y-4 sm:space-y-5 text-[#e8e0d5]/60 leading-relaxed font-light text-sm sm:text-base"
            >
              <p>
                Я помогаю людям возвращаться к себе — не становиться «лучше» или «идеальнее»,
                а заново слышать свои настоящие желания, чувства и потребности
              </p>
              <p>
                Терапия помогает постепенно убрать всё лишнее — как слой за слоем — и увидеть
                свою жизнь такой, какая она есть на самом деле
              </p>
              <p>
                Я не работаю через обвинения прошлого или поиск «виноватых». Да, у каждого есть
                свой опыт и свои сложности. Но терапия — это прежде всего про взрослую
                ответственность за себя, свою жизнь и свои решения
              </p>
              <p>
                Моя задача — создать пространство, в котором человек сможет честно посмотреть
                на себя, свои реакции, страхи, отношения и начать жить не из тревоги
                или привычных сценариев, а из контакта с собой
              </p>
              <p>
                Наши сессии — это про безопасность. Я никогда не осужу тебя, никогда ни в чём
                не обвиню — помогу разобраться, в чём именно дело. Без критики, без нравоучений.
                Я готова гарантировать: после первой встречи со мной вам станет легче —
                в ста процентах случаев, без исключений
              </p>
            </motion.div>

            <motion.ul
              {...fadeUp(0.45)}
              className="mt-8 sm:mt-10 space-y-2 border-t border-white/5 pt-6"
            >
              {[
                'Бакалавр клинической психологии — ОНУ им. Мечникова',
                '4 года обучения транзакционному анализу',
                'Гештальт-терапия',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-xs text-[#e8e0d5]/28 font-light tracking-wide">
                  <span className="mt-px text-[#9aae91]/35 shrink-0">·</span>
                  {item}
                </li>
              ))}
            </motion.ul>

          </div>
        </div>
      </div>
    </section>
  )
}
