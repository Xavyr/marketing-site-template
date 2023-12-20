"use server"

import { ContactFormEmail } from '@/email/contact-form-email';

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)


export const SendEmail = async (formData: { senderEmail: string, message?: string }) => {
  const senderEmail = formData.senderEmail;
  const message = formData.message === undefined ?
    `${senderEmail} subscribed to free demo` : formData.message;


  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY is missing');
  }

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }


  let data;
  try {
    data = await resend.emails.send({
      // VALIDATE DOMAIN ON RESEND
      from: `Company <onboarding@resend.dev>`,
      to: 'your email',
      subject: 'Company',
      // reply_to: senderEmail,
      react: ContactFormEmail({
        message: message,
        senderEmail: senderEmail
      }),
      text: `${senderEmail} && ${message}`
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  console.log(data, `server`)
  return {
    data,
  }
}