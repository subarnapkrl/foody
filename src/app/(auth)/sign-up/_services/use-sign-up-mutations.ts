import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SignUpSchema } from "../_types/signUpSchema";
import { signUp } from "./sign-up-mutations";
import { toast } from "sonner";

const useSignUp = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: SignUpSchema) => {
      await signUp(data);
    },
    onSuccess: () => {
      toast.success("Signed Up Successfully");
      router.replace("/sign-in");
    },
  });
};
export { useSignUp };
