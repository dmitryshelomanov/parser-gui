import { BrowserRouter, Route } from "react-router-dom";
import { GlobalStyle } from "@gui/ui/styles";
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
