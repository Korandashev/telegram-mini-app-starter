import { Cell, List, Section } from "@telegram-apps/telegram-ui";
import { useScanQrPopup, useConfirm } from "@app/hooks";

export default () => {
  const handleOpenQrScanner = useScanQrPopup("", Telegram.WebApp.showAlert);
  const handleCloseApp = useConfirm("Are you sure?", Telegram.WebApp.close);

  return (
    <List>
      <Section header="Actions">
        <Cell onClick={handleOpenQrScanner}>Open QR scanner</Cell>
        <Cell onClick={handleCloseApp}>Close app</Cell>
      </Section>
    </List>
  );
};
