import 'fast-text-encoding';
import joi from 'joi';

interface ISignUpFormSchema {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const schema = joi.object({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  password: joi.string().min(8).required(),
  confirmPassword: joi.ref('password'),
});

export { schema as signUpSchema };
export type { ISignUpFormSchema };
