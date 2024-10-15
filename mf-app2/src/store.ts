import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CountState {
  pagination: {
    offset: number;
    limit: number;
  };
  nextPage: () => void;
  previousPage: () => void;
}

const useCounter = create<CountState>()(
  devtools(
    persist(
      (set) => ({
        pagination: {
          offset: 0,
          limit: 6,
        },
        nextPage: () =>
          set((state) => ({
            pagination: {
              offset: state.pagination.offset + state.pagination.limit,
              limit: state.pagination.limit,
            },
          })),
        previousPage: () =>
          set((state) => ({
            pagination: {
              offset: state.pagination.offset - state.pagination.limit,
              limit: state.pagination.limit,
            },
          })),
      }),
      { name: "shopStore" },
    ),
  ),
);
export default useCounter;
