import { z } from 'zod';

// Constants
import { MESSAGE_VALID } from '@/constants';

export const signUpSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  email: z
    .string()
    .email(MESSAGE_VALID.EMAIL_ERROR)
    .min(1, 'Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

export const signInSchema = z.object({
  email: z
    .string()
    .email(MESSAGE_VALID.EMAIL_ERROR)
    .min(1, 'Email is required'),
  password: z.string().min(6, MESSAGE_VALID.PASSWORD_ERROR)
});

export const profileSchema = z
  .object({
    firstName: z.string().min(1, { message: 'First Name is required.' }),
    lastName: z.string().optional(),
    email: z.string().email({ message: 'Invalid email address.' }),
  })

export const passwordSchema = z.object({
  password: z.string().min(6, 'Password must be at least 6 characters'),
  newPassword: z.string().optional(),
  confirm: z.string().optional()
}).refine(
  (data) => !data.newPassword || data.newPassword.length >= 6,
  {
    message: 'Password must be at least 6 characters',
    path: ['newPassword']
  }
).refine(
  (data) => !data.newPassword || data.newPassword === data.confirm,
  {
    message: 'Confirm password does not match new password',
    path: ['confirm']
  }
);

export const addressSchema = z.object({
  apartment: z.string().optional(),
  street: z.string().min(1, { message: 'Street is required.' }),
  city: z.string().min(1, { message: 'City is required.' }),
  company: z.string().optional(),
  phone: z
    .string()
    .regex(/^\d+$/, { message: 'Phone number must be a valid number.' })
    .min(10, { message: 'Phone number must have at least 10 digits.' })
    .max(10, { message: 'Phone number must have no more than 10 digits.' })
});

export const billingSchema = z.object({
  address: addressSchema
});