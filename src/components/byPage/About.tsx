import Section from "@components/shared/Section";
import ExpandableButton from "@components/shared/expandableButton/ExpandableButton";
import Title from "@components/shared/title/Title";
import { useTranslations } from "next-intl";

const CURRENT_SECTION = "about";

export default function About() {
  const t = useTranslations("about");

  return (
    <Section
      className="relative h-svh lg:h-dvh gap-10 pt-20 md:pt-40"
      currentSection={CURRENT_SECTION}
    >
      <header className="mt-8 sm:mt-0">
        <Title
          component="h1"
          border
          topLabel={t("topLabel")}
          bottomLabel={t("bottomLabel")}
          isRightLabelBlink
        >
          {t("mainTitle")}
        </Title>
      </header>

      <Title animationClassName="delayed-subtitle-animation">
        {t("subtitle")}
      </Title>

      <ExpandableButton alternativeLabel={t("alternativeLabel")} />
    </Section>
  );
}
