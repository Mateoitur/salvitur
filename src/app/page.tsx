'use client'

import DarkVeil from '@/components/DarkVeil'
import NumberFlow from '@number-flow/react'
import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'

export default function Home() {
  const selectAll = (e: React.FocusEvent<HTMLInputElement>) => {
    // iOS sometimes needs a tiny delay
    setTimeout(() => e.target.select(), 0)
  }

  const [value, setValue] = useState<number>(0)
  const [amount, setAmount] = useState<number>(0)

  const plus = () => {
    const step = Math.round(Number.isFinite(amount) ? amount : 0)
    if (!step) return
    setValue((v) => v + step)
    setAmount(0) // reset input
  }

  const minus = () => {
    const step = Math.round(Number.isFinite(amount) ? amount : 0)
    if (!step) return
    setValue((v) => v - step)
    setAmount(0) // reset input
  }

  return (
    <main className="relative max-h-screen">
      {/*Background*/}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <DarkVeil hueShift={40} />
      </div>

      {/*Content*/}
      <div className="h-screen flex flex-col items-center justify-center">
        <div className="flex items-baseline gap-2">
          <NumberFlow
            className="text-7xl text-white md:text-[150px] font-extrabold"
            value={value}
          />
          <p className="text-white/50 font-extrabold text-4xl md:text-6xl">DKK</p>
        </div>

        {/*Controls*/}
        <div className="flex items-center gap-2">
          <button onClick={minus} className="btn-plus-minus">
            <Minus />
          </button>
          <label>
            <input
              inputMode="numeric"
              type="number"
              pattern="[0-9]*"
              onFocus={selectAll}
              value={amount}
              className="input-amount"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </label>
          <button onClick={plus} className="btn-plus-minus">
            <Plus />
          </button>
        </div>
      </div>
    </main>
  )
}
