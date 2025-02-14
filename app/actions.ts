"use server";

import { z } from "zod";
import { blogSchema } from "./utils/zodSchemas";

export async function createJob(formData: FormData) {
  const title = formData.get("title");
  const description = formData.get("description");
  const status = formData.get("status");

  //do your mutation here

  console.log(title, description, status);
}

export async function validateCreateJob(values: z.infer<typeof blogSchema>) {
  const result = blogSchema.safeParse(values);

  if (!result.success) {
    return {
      status: "error",
      message: result.error.message,
    };
  }

  //do your mutation here

  console.log(result.data.title, result.data.description, result.data.status);

  return {
    status: "success",
    message: "Job created successfully",
  };
}
