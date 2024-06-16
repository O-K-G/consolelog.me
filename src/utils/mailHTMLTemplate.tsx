export default function mailHTMLTemplate({
  dir,
  email,
  subject,
  content,
}: {
  dir: string;
  email: string;
  subject: string;
  content: string;
}) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>A message from consolelog.me</title>
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
      <h1>A message from consolelog.me</h1>
      <span
        ><b>Sender&apos;s email address:&nbsp;</b
        ><a href="mailto:${email}" rel="noreferrer" target="_blank">${email}</a></span
      >
      <p><b>Subject:</b>&nbsp;${subject}</p>
      <p><b>Message content:</b>&nbsp;${content}</p>
    </main>
  </body>
</html>
`;
}
