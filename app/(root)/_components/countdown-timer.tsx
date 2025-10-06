'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  initialHours?: number
  initialMinutes?: number
  initialSeconds?: number
}

export function CountdownTimer({
  initialHours = 23,
  initialMinutes = 47,
  initialSeconds = 23,
}: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { hours, minutes, seconds } = prevTime

        // Diminui um segundo
        seconds--

        // Se segundos ficaram negativos, diminui um minuto
        if (seconds < 0) {
          seconds = 59
          minutes--

          // Se minutos ficaram negativos, diminui uma hora
          if (minutes < 0) {
            minutes = 59
            hours--

            // Se horas ficaram negativas, reinicia o timer (opcional)
            if (hours < 0) {
              // Reinicia com valores iniciais
              return {
                hours: initialHours,
                minutes: initialMinutes,
                seconds: initialSeconds,
              }
            }
          }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    // Cleanup do timer quando o componente for desmontado
    return () => clearInterval(timer)
  }, [initialHours, initialMinutes, initialSeconds])

  return (
    <div className="flex justify-center gap-4 text-center">
      <div className="rounded-lg bg-black/50 px-4 py-2">
        <div className="text-2xl font-bold text-white">
          {timeLeft.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300">HORAS</div>
      </div>
      <div className="rounded-lg bg-black/50 px-4 py-2">
        <div className="text-2xl font-bold text-white">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300">MINUTOS</div>
      </div>
      <div className="rounded-lg bg-black/50 px-4 py-2">
        <div className="text-2xl font-bold text-white">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs text-gray-300">SEGUNDOS</div>
      </div>
    </div>
  )
}