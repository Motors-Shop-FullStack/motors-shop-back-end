import * as yup from "yup";
import { SchemaOf } from "yup";
import { ISchemaUser, IUserLogin } from "../../interfaces/users.interface";

export const UserCreateSchema: SchemaOf<ISchemaUser> = yup.object().shape({
  address: yup
    .object()
    .shape({
      cep: yup.string().required("Cep in address is required"),
      state: yup.string().required("State in address is required"),
      city: yup.string().required("City in address is required"),
      street: yup.string().required("Street in address is required"),
      number: yup.string().required("Number in address is required"),
    })
    .required("Address is required"),
  cpf: yup.number().required("Cpf is required"),
  password: yup.string().required("Password are required"),
  // .matches(/(?=.*[a-z])/, "Password must have one lower case")
  // .matches(/(?=.*[A-Z])/, "Password must have one upper case")
  // .matches(/(?=.*[0-9])/, "Password must have one number")
  // .matches(/(?=.*[!$*&@#])/, "Password must have one special character")
  // .min(8, "Password must contain at least 8 letters"),
  email: yup
    .string()
    .email("Email with a invalid format")
    .required("Email are required"),
  name: yup.string().required("Name are required"),
});

export const UserLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
  email: yup
    .string()
    .email("Email with a invalid format")
    .required("Email are required"),
  password: yup.string().required("Password is required"),
});
