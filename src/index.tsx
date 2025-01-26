import { render } from "preact";
import { AppRoot } from "@telegram-apps/telegram-ui";
import Main from "@app/pages/Main";

import "./styles.css";

render(
  <AppRoot>
    <Main />
  </AppRoot>,
  document.getElementById("root")
);
