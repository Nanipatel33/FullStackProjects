"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.commentUpdate = exports.CommentCreate = exports.ZapUpdate = exports.ZapCreate = exports.Signinput = exports.Signupinput = void 0;
const zod_1 = require("zod");
exports.Signupinput = zod_1.z.object({
    username: zod_1.z.string().min(2),
    name: zod_1.z.string().min(2),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
const userUpdate = zod_1.z.object({
    username: zod_1.z.string().min(3, "Username must be at least 3 characters long").optional(),
    email: zod_1.z.string().email("Invalid email format").optional(),
});
exports.Signinput = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(8)
});
exports.ZapCreate = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.ZapUpdate = zod_1.z.object({
    title: zod_1.z.string().min(1, "Title is required"), // Title must be a non-empty string
    content: zod_1.z.string().min(1, "Content is required"), // Content must be a non-empty string
});
exports.CommentCreate = zod_1.z.object({
    content: zod_1.z.string().min(1, "Content is required"),
    zapid: zod_1.z.number(),
});
exports.commentUpdate = zod_1.z.object({
    content: zod_1.z.string().min(1, "Content is required"), // Content must be a non-empty string
});
