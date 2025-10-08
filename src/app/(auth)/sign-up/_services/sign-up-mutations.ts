"use server";

import { executeAction } from "@/lib/executeAction";
import { signUpSchema, SignUpSchema } from "../_types/signUpSchema";
import { hashPassword } from "@/lib/utils";
import db from "@/lib/db";

const signUp = async (data: SignUpSchema) => {
  await executeAction({
    actionFn: async () => {
      const validatedData = signUpSchema.parse(data);
      const hashedPassword = await hashPassword(validatedData.password);
      await db.user.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          password: hashedPassword,
          role: "USER",
        },
      });
    },
  });
};
export { signUp };
