import { useCallback } from "preact/hooks";

export const useScanQrPopup = (text: string, ok?: (result: string) => void) => {
  const handleOpen = useCallback(() => {
    Telegram.WebApp.showScanQrPopup({ text }, ok);
    return () => Telegram.WebApp.closeScanQrPopup();
  }, [text, ok]);

  return handleOpen;
};
