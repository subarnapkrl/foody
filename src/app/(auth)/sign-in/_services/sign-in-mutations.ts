"use server";
import {
  signInSchema,
  SignInSchema,
} from "@/app/(auth)/sign-in/_types/signInSchema";
import { executeAction } from "@/lib/executeAction";
import { signIn as nextAuthSignIn, signOut as authSignOut } from "@/lib/auth";

const signIn = async (data: SignInSchema) => {
  await executeAction({
    actionFn: async () => {
      const validatedData = signInSchema.parse(data);
      await nextAuthSignIn("credentials", validatedData);
    },
  });
};

const signOut = () => {
  return executeAction({
    actionFn: authSignOut,
  });
};

export { signIn, signOut };
