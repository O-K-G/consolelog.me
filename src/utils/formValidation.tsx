import type { FormValidationProps } from '@constants/interfaces';

export default function formValidation({
  email,
  subject,
  content,
}: FormValidationProps) {
  console.log('client', {
    email,
    subject,
    content,
  });
  return true;
}
