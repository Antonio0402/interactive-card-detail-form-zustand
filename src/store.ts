import { create } from "zustand";

export type Name = "holder" | "number" | "month" | "year" | "cvc"

const useForm = create<{
  holder: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
  isValidNumber: boolean;
  isValidDate: boolean;
  isValidCVC: boolean;
  actions: {
    setValue: (value: string, name: Name) => void;
    setIsValidDate: () => void;
    setIsValidNumber: () => void;
    setIsValidCVC: () => void;
  }
}>((set, get) => (({
  holder: "",
  number: "",
  month: "",
  year: "",
  cvc: "",
  isValidNumber: false,
  isValidDate: false,
  isValidCVC: false,
  actions: {
    setValue(value: string | boolean, name: Name) {
      set({ [name]: value})
    },
    setIsValidNumber() {
      set({ isValidNumber: /[\d]{16}/.test(get().number)})
    },
    setIsValidDate() {
      set({ isValidDate: /[\d]{2}/.test(get().month) && /\d{2}/.test(get().year)})
    },
    setIsValidCVC() {
      set({ isValidCVC: /\d{3}/.test(get().cvc)})
    }
  }
})));


export const useMonth = () => useForm((state) => state.month);
export const useYear = () => useForm((state) => state.year);
export const useHolder = () => useForm((state) => state.holder);
export const useNumber = () => useForm((state) => state.number);
export const useCVC = () => useForm((state) => state.cvc);
export const useIsValidDate = () => useForm((state) => state.isValidDate);
export const useIsValidNumber = () => useForm((state) => state.isValidNumber);
export const useIsValidCVC = () => useForm((state) => state.isValidCVC);


export const useFormActions = () => useForm((state) => state.actions)