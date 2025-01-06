import { create } from "zustand";

const useNotificationStore = create((set) => ({
  notification: null,
  showNotification: (tipo, mensaje) => set({ notification: { tipo, mensaje } }),
  closeNotification: () => set({ notification: null }),
}));

export default useNotificationStore;
