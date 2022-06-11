import 'fast-text-encoding';
import joi from 'joi';

interface ILoginFormSchema {
  email: string;
  password: string;
}

const schema = joi
  .object({
    email: joi
      .string()
      // tlds to fix library issue
      .email({ tlds: { allow: false } })
      .required(),
    password: joi.string().min(8).required(),
  })
  .required();

export { schema as loginSchema };
export type { ILoginFormSchema };
