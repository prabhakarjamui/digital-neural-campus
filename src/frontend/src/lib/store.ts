import { create } from "zustand";
import type { SubmitInquiryPayload } from "../backend.d";

export type InquiryFormStep = "idle" | "submitting" | "success" | "error";

interface InquiryFormState {
  form: SubmitInquiryPayload;
  step: InquiryFormStep;
  errorMessage: string | null;
  isContactOpen: boolean;

  setField: (field: keyof SubmitInquiryPayload, value: string) => void;
  setStep: (step: InquiryFormStep) => void;
  setError: (msg: string) => void;
  resetForm: () => void;
  openContact: () => void;
  closeContact: () => void;
}

const defaultForm: SubmitInquiryPayload = {
  name: "",
  email: "",
  institution: "",
  phone: "",
  message: "",
};

export const useInquiryStore = create<InquiryFormState>((set) => ({
  form: { ...defaultForm },
  step: "idle",
  errorMessage: null,
  isContactOpen: false,

  setField: (field, value) =>
    set((state) => ({ form: { ...state.form, [field]: value } })),

  setStep: (step) => set({ step }),

  setError: (msg) => set({ step: "error", errorMessage: msg }),

  resetForm: () =>
    set({ form: { ...defaultForm }, step: "idle", errorMessage: null }),

  openContact: () => set({ isContactOpen: true }),
  closeContact: () => set({ isContactOpen: false }),
}));
