'use server';

import { MailHTMLTemplateProps } from '@constants/interfaces';
import mailHTMLText from '@i18nEn/mailHTMLText.json';
import { ReactNode } from 'react';

const STYLE = {
  main: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'start',
    width: '100%',
    padding: '1rem',
    color: 'black',
    backgroundColor: 'white',
    fontSize: '1rem',
  },
  h1: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '0.75rem',
    lineHight: '1rem',
  },
  span: {
    width: '100%',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
  },
  a: {
    textDecoration: 'none',
    textTransform: 'lowercase',
  },
  p: {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'start',
    width: '100%',
    textAlign: 'left',
    margin: '0',
  },
} as const;

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
    website,
  } = mailHTMLText;
  const title = `${subjectText}:\xa0${website}`;

  const getData = async (component: ReactNode) => {
    const ReactDOMServer = (await import('react-dom/server')).default;
    const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
    return staticMarkup;
  };

  const html = await getData(
    <html lang="en">
      {/* eslint-disable-next-line */}
      <head>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-expect-error */}
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
      </head>
      <body dir={dir || 'ltr'}>
        <main style={STYLE.main}>
          <h1 style={STYLE.h1}>{title}</h1>
          <span style={STYLE.span}>
            <b>{sendersEmailAddressText}:</b>&nbsp;
            <a
              style={STYLE.a}
              href={`mailto:${email}`}
              rel="noreferrer"
              target="_blank"
            >
              {email}
            </a>
          </span>
          <h2 style={STYLE.h1}>
            <b>{subjectSecondaryTitle}:</b>&nbsp;{subject}
          </h2>
          <p style={STYLE.p}>
            <b>{messageContent}:</b>&nbsp;{content}
          </p>
        </main>
      </body>
    </html>
  ).then((data) => data);

  return `<!DOCTYPE html>${html}`;
}
