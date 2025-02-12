import Section from "@components/shared/Section";
import { useTranslations } from "next-intl";
import SkillsList from "@components/SkillsList";
import SideLinks from "@components/shared/SideLinks";
import Title from "@components/shared/title/Title";

const CURRENT_SECTION = "skills";

export default function Skills() {
  const t = useTranslations("skills");

  return (
    <Section
      className="relative h-[200svh] lg:h-[200dvh] pt-20 md:pt-40"
      currentSection={CURRENT_SECTION}
    >
      <Title
        className="animate-skills animate-skills-polyfill fixed top-[110vh] row-1 row-1-polyfill"
        border
      >
        {t("mainTitle")}
      </Title>
      <Title
        className="animate-skills animate-skills-polyfill fixed top-[110vh] row-2 row-2-polyfill"
        variant="subtitle"
      >
        {t("subtitle")}
      </Title>
      <SkillsList />

      <SideLinks />
    </Section>
  );
}
