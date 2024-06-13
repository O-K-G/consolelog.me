import type { FormValidationProps } from '@constants/interfaces';
import { z } from 'zod';
import {
  EMAIL_MAX_LENGTH,
  SUBJECT_MAX_LENGTH,
  CONTENT_MAX_LENGTH,
} from '@components/ContactForm';

export default function formValidation({
  email,
  subject,
  content,
}: FormValidationProps) {
  const FormDataSchema = z.object({
    email: z.string().email().max(EMAIL_MAX_LENGTH),
    subject: z.string().max(SUBJECT_MAX_LENGTH),
    content: z.string().max(CONTENT_MAX_LENGTH),
  });

  const validation = FormDataSchema.safeParse({ email, subject, content });
  const { success: isValidated } = validation;

  return isValidated;
}
