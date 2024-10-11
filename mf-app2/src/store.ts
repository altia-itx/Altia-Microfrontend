import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface CountState {
    count: number
    increase: (by: number) => void
}

const useCounter = create<CountState>()(
    devtools(
        persist(
            (set) => ({
                count: 0,
                increase: (by) => set((state) => ({ count: state.count + by })),
            }),
            { name: 'shopStore' },
        ),
    ),
)
export default useCounter;