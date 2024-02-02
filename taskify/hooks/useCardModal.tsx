import { create } from "zustand";

type CardModalStore = {
   cardId?: string;
   isOpen: boolean;
   onOpen: (cardId: string) => void;
   onClose: () => void;
};

export const useCardModal = create<CardModalStore>((set) => ({
   cardId: undefined,
   isOpen: false,
   onOpen: (cardId: string) => set({ cardId, isOpen: true }),
   onClose: () => set({ cardId: undefined, isOpen: false }),
}));
