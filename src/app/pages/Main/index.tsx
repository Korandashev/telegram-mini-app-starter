import { Cell, List, Section } from "@telegram-apps/telegram-ui";

export default () => {
  const handleClose = () => {
    window.Telegram.WebApp.close();
  };

  return (
    <List>
      <Section header="Header for the section">
        <Cell>Chat Settings</Cell>
        <Cell>Data and Storage</Cell>
        <Cell>Devices</Cell>
        <Cell onClick={handleClose}>Close app</Cell>
      </Section>
    </List>
  );
};
