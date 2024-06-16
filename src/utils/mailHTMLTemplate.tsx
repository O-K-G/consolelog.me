'use server';

import type { MailHTMLTemplateProps } from '@constants/interfaces';
import mailHTMLText from '@i18nEn/mailHTMLText.json';

export default async function mailHTMLTemplate({
  dir,
  email,
  subject,
  content,
}: MailHTMLTemplateProps) {
  const {
    subject: subjectText,
    sendersEmailAddressText,
    subjectSecondaryTitle,
    messageContent,
  } = mailHTMLText;

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${subjectText}</title>
  </head>
  <style>
    main {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      width: 100%;
      padding: 1rem;
      color: black;
      background-color: white;
      font-size: 1rem;
    }
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
    }
    a {
      text-decoration: none;
      text-transform: lowercase;
    }
    p {
      display: flex;
      align-items: start;
      justify-content: start;
      width: 100%;
      text-align: left;
      margin: 0;
    }
    span {
      width: 100%;
      display: flex;
      align-items: start;
      justify-content: start;
    }
  </style>
  <body dir="${dir || 'ltr'}">
    <main>
      <h1>${subjectText}</h1>
      <span
        ><b>${sendersEmailAddressText}:&nbsp;</b
        ><a href="mailto:${email}" rel="noreferrer" target="_blank">${email}</a></span
      >
      <p><b>${subjectSecondaryTitle}:</b>&nbsp;${subject}</p>
      <p><b>${messageContent}:</b>&nbsp;${content}</p>
    </main>
  </body>
</html>
`;
}
