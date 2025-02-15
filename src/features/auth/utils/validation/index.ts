import { joiResolver } from '@hookform/resolvers/joi';
import { Schema } from 'joi';

export const getResolver = (schema: Schema) => joiResolver(schema);

export * from './ForgetPassword.shema';
export * from './Login.shema';
export * from './SignUp.shema';
