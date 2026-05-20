import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const formats = [
  {
    tag: 'Онлайн',
    title: 'Видеосессия',
    desc: 'Встречаемся в Zoom или любом удобном мессенджере. Работает так же глубоко, как очно — проверено временем и личным опытом',
    features: ['Zoom / Google Meet', 'Любой часовой пояс', 'Запись по желанию'],
    accent: false,
  },
  {
    tag: 'Текст',
    title: 'Поддержка в переписке',
    desc: 'Формат для тех, кому важно сохранять контакт и поддержку между сессиями. Возможность написать в течение дня, получить обратную связь, зафиксировать состояние или обсудить важный момент',
    features: ['Telegram / WhatsApp', 'Постоянная связь', 'Ответ в течение дня', 'Поддержка между сессиями'],
    accent: true,
  },
]

export default function Formats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="formats" ref={ref} className="section-padding">
      <div className="container-wide">
        <div className="mb-10 sm:mb-16 max-w-5xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="label-text block mb-5 sm:mb-6"
          >
            Форматы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="heading-serif font-normal leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 3rem)' }}
          >
            Выберите{' '}
            <em className="italic text-[#9aae91]">удобный формат</em>
          </motion.h2>
        </div>

        {/* 2-column grid — centered, balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8 max-w-5xl mx-auto">
          {formats.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-6 sm:p-8 md:p-10 flex flex-col relative overflow-hidden"
              style={f.accent ? {
                background: 'linear-gradient(135deg, rgba(154,174,145,0.08) 0%, rgba(154,174,145,0.03) 100%)',
                border: '1px solid rgba(154,174,145,0.2)',
              } : {
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Top accent line for highlighted card */}
              {f.accent && (
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, transparent, rgba(154,174,145,0.5), transparent)' }}
                />
              )}

              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <span className="label-text text-[10px]">{f.tag}</span>
                {f.accent && (
                  <span className="text-[10px] tracking-widest uppercase text-[#9aae91] border border-[#9aae91]/30 rounded-full px-3 py-1">
                    Популярно
                  </span>
                )}
              </div>

              <h3 className="heading-serif font-normal mb-4 sm:mb-5 text-[#f0ebe3]"
                style={{ fontSize: 'clamp(1.25rem, 4vw, 1.6rem)' }}
              >
                {f.title}
              </h3>

              <p className="text-sm text-[#e8e0d5]/55 leading-relaxed font-light mb-6 sm:mb-8 flex-1">
                {f.desc}
              </p>

              <div className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8">
                {f.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#9aae91]/50 shrink-0" />
                    <span className="text-xs text-[#e8e0d5]/40">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/6 pt-5 sm:pt-6">
                <a
                  href="#cta"
                  className={`w-full flex items-center justify-center text-sm px-5 py-3 rounded-full transition-all duration-300 active:scale-95 ${
                    f.accent
                      ? 'bg-[#9aae91] text-[#0f0e0c] hover:bg-[#b7c4b1]'
                      : 'border border-white/10 text-[#e8e0d5]/60 hover:border-white/20 hover:text-[#e8e0d5]'
                  }`}
                  style={{ touchAction: 'manipulation', minHeight: '48px' }}
                >
                  Записаться
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
