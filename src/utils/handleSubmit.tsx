'use server';

import formValidation from '@utils/formValidation';
import mailConfig from '@utils/mailConfig';
import { JSDOM } from 'jsdom';
import DOMPurify from 'dompurify';

export async function handleSubmit(formData: FormData) {
  const handleSanitation = (val: string) => {
    const win = new JSDOM('').window;
    const purify = DOMPurify(win);

    return purify.sanitize(val);
  };

  const dir = handleSanitation(formData.get('dir') as string);
  const email = handleSanitation(formData.get('email') as string);
  const subject = handleSanitation(formData.get('subject') as string);
  const content = handleSanitation(formData.get('content') as string);
  const { isValidated } = formValidation({ email, subject, content });

  if (!isValidated) {
    return { status: '400' };
  } else {
    const { env } = process;
    const { HOST_SUCCESS_RESPONSE } = env;
    const { transporter, messageSendDetailsObject } = await mailConfig({
      dir,
      email,
      subject,
      content,
    });

    try {
      const { response } =
        (await transporter.sendMail(messageSendDetailsObject)) || {};

      if (response.includes(HOST_SUCCESS_RESPONSE as unknown as string)) {
        return { status: '201' };
      }
    } catch (nodeMailerRequestError) {
      console.error(nodeMailerRequestError);
      return { status: '401' };
    }
  }
}
