import { BrowserRouter, Route } from "react-router-dom";
import { Pane, Text } from "evergreen-ui";
import { GlobalStyle } from "@gui/ui/styles";
import { ModalUI } from "@gui/ui/organisms";
import { HomePage } from "./home";

export function RootRouter() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Route path="*" component={HomePage} />
      </BrowserRouter>
    </>
  );
}
