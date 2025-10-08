import z from "zod";
import { patterns } from "./constants";

const regexSchema = (pattern: RegExp) => z.coerce.string().regex(pattern);
const requiredStringSchema = z.string().min(1).max(255).trim();
const passwordSchema = z
  .string()
  .max(255)
  .refine((str) => patterns.minimumOneUpperCaseLetter.test(str), {
    message: "Minimum one upper case letter",
  })
  .refine((str) => patterns.minimumOneLowerCaseLetter.test(str), {
    message: "Minimum one lower case letter",
  })
  .refine((str) => patterns.minimumOneDigit.test(str), {
    message: "Minimum one digit",
  })
  .refine((str) => patterns.minimumOneSpecialCharacter.test(str), {
    message: "Minimum one special letter",
  })
  .refine((str) => patterns.minEightCharacters.test(str), {
    message: "Minimum eight letter",
  });
export { requiredStringSchema, regexSchema, passwordSchema };
