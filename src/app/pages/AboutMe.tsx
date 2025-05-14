import { FormattedMessage } from "react-intl";
import LanguageButton from "../components/LanguageButton";
export default function AboutMe() {
  return (
    <section>
      <LanguageButton />
      <h2>
        <FormattedMessage id="about.title" />
      </h2>
    </section>
  );
}
