import { z } from "zod";

export const blogSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title must be at most 50 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be at most 500 characters"),
  status: z.enum(["draft", "published", "archived"], {
    errorMap: () => ({ message: "Please select a valid status" }),
  }),
});
