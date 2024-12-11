import { z } from 'zod';

// Constants
import { MESSAGE_VALID } from '@/constants';

export const signUpSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  email: z
    .string()
    .email(MESSAGE_VALID.EMAIL_ERROR)
    .min(1, 'Email is required'),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signInSchema = z.object({
  email: z
    .string()
    .email(MESSAGE_VALID.EMAIL_ERROR)
    .min(1, 'Email is required'),
  password: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR)
});

export const profileSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  email: z.string().email({ message: 'Invalid email address.' }),
  newPassword: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR),
  confirm: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR)
})
  .refine((data) => data.newPassword === data.confirm, {
    message: MESSAGE_VALID.CONFIRM_ERROR,
    path: ['confirm']
  });

export const addressSchema = z.object({
  apartment: z.string().optional(),
  street: z.string().nonempty('Street is required'),
  city: z.string().nonempty('City is required'),
  company: z.string().optional()
});