import { useCallback } from "preact/hooks";

export const useConfirm = (message: string, ok?: () => void, cancel?: () => void) => {
  return useCallback(() => {
    Telegram.WebApp.showConfirm(message, (confirm) => (confirm ? ok : cancel)());
  }, [message, ok, cancel]);
};
