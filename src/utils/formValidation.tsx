import type { FormValidationProps } from '@constants/interfaces';
import { FormDataSchema } from '@constants/interfaces';

export default function formValidation({
  email,
  subject,
  content,
}: FormValidationProps) {
  const validation = FormDataSchema.safeParse({ email, subject, content });
  const { success: isValidated } = validation;

  return isValidated;
}
