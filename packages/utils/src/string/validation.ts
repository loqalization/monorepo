import { z } from "zod";
export class Validation {
  static isEmail(email: string): boolean {
    const emailValidation = z.string().email();
    try {
      emailValidation.parse(email);
      return true;
    } catch (error) {
      return false;
    }
  }
}
