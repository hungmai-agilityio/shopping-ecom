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

