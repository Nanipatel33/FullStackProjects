

import  { z } from 'zod';

export const Signupinput = z.object({
  username: z.string().min(2), 
  name: z.string().min(2), 
  email: z.string().email(),    
  password: z.string().min(6), 
});
export const userUpdate = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long").optional(),
    name:z.string().min(3,"name must be at least 3 charecters log").optional(),
    email: z.string().email("Invalid email format").optional(),
    password : z.string().min(6)
})

export const Signinput = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})
export const ZapCreate = z.object({
    title: z.string(),
    content: z.string()
})
export const ZapUpdate = z.object({
    title: z.string().min(1, "Title is required"), 
    content: z.string().min(1, "Content is required"),
})
export const CommentCreate = z.object({
    content: z.string().min(1, "Content is required"),
    zapid: z.number(),
  });
  export const commentUpdate = z.object({
    content: z.string().min(1, "Content is required"), 
})
  
export type Signupinput = z.infer<typeof Signupinput>
export type userUpdate = z.infer<typeof userUpdate>
export type Signinput = z.infer<typeof Signinput>
export type ZapCreate = z.infer<typeof ZapCreate>
export type ZapUpdate = z.infer<typeof ZapUpdate>
export type commentCreate =z.infer<typeof CommentCreate>
export type commentUpdate =z.infer<typeof commentUpdate>