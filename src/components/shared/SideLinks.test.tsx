import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { URLs } from "@constants/urls";
import { default as messages } from "@i18nEn/sideLinks.json";
import { IntlProvider } from "next-intl";
import SideLinks, {
  GH_TEST_ID,
  LI_TEST_ID,
} from "@components/shared/SideLinks";

// FIXME: Tests / Next-intl

const DEFAULT_LOCALE = "en";

describe("SideLinks Component", () => {
  it("renders GitHub and LinkedIn links", () => {
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <SideLinks />
      </IntlProvider>
    );

    const ghLink = screen.getByTestId(GH_TEST_ID);
    expect(ghLink).toBeInTheDocument();
    expect(ghLink).toHaveAttribute("href", URLs.gitHub);
    expect(ghLink).toHaveAttribute("rel", "noreferrer");
    expect(ghLink).toHaveAttribute(
      "aria-label",
      messages.sideLinks.ghLinkAriaLabel
    );

    const liLink = screen.getByTestId(LI_TEST_ID);
    expect(liLink).toBeInTheDocument();
    expect(liLink).toHaveAttribute("href", URLs.linkedIn);
    expect(liLink).toHaveAttribute("rel", "noreferrer");
    expect(liLink).toHaveAttribute(
      "aria-label",
      messages.sideLinks.liLinkAriaLabel
    );
  });
});
