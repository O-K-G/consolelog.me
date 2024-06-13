import type { FormValidationProps } from '@constants/interfaces';
import { z } from 'zod';

export default function formValidation({
  email,
  subject,
  content,
}: FormValidationProps) {
  const FormDataSchema = z.object({
    email: z.string().email(),
    subject: z.string(),
    content: z.string(),
  });

  const validation = FormDataSchema.safeParse({ email, subject, content });
  const { success: isValidated } = validation;

  return isValidated;
}
