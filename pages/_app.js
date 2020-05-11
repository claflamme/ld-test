import { IntlProvider } from "react-intl";

import flattenMessages from "../utils/flattenMessages";
import enCA from "../i18n/en-CA.yml";
import "../styles/app.scss";

const enMessages = flattenMessages(enCA);

export default function MyApp({ Component, pageProps }) {
  return (
    <IntlProvider locale={"en"} messages={enMessages}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
