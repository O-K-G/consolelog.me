'use server';

import formValidation from '@utils/formValidation';
import mailConfig from '@utils/mailConfig';

export async function handleSubmit(formData: FormData) {
  const dir = formData.get('dir') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const content = formData.get('content') as string;

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
