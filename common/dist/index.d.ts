import { z } from 'zod';
export declare const Signupinput: z.ZodObject<{
    username: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    name: string;
    email: string;
    password: string;
}, {
    username: string;
    name: string;
    email: string;
    password: string;
}>;
declare const userUpdate: z.ZodObject<{
    username: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    username?: string | undefined;
    email?: string | undefined;
}, {
    username?: string | undefined;
    email?: string | undefined;
}>;
export declare const Signinput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const ZapCreate: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const ZapUpdate: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
}, {
    title: string;
    content: string;
}>;
export declare const CommentCreate: z.ZodObject<{
    content: z.ZodString;
    zapid: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    content: string;
    zapid: number;
}, {
    content: string;
    zapid: number;
}>;
export declare const commentUpdate: z.ZodObject<{
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    content: string;
}, {
    content: string;
}>;
export type Signupinput = z.infer<typeof Signupinput>;
export type userUpdate = z.infer<typeof userUpdate>;
export type Signinput = z.infer<typeof Signinput>;
export type ZapCreate = z.infer<typeof ZapCreate>;
export type ZapUpdate = z.infer<typeof ZapUpdate>;
export type commentCreate = z.infer<typeof CommentCreate>;
export type commentUpdate = z.infer<typeof commentUpdate>;
export {};
