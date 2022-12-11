import 'fast-text-encoding';
import joi from 'joi';

interface IForgetPswFormSchema {
  email: string;
}

const schema = joi
  .object({
    email: joi
      .string()
      // tlds to fix library issue
      .email({ tlds: { allow: false } })
      .required(),
  })
  .required();

export { schema as forgetPasswordSchema };
export type { IForgetPswFormSchema };
