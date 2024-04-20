import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";

const customerSchema = zod
    .object({
        email: zod
            .string()
            .min(1, { message: "This field is required." })
            .email({ message: "Must be a valid email." }),
        firstName: zod.string().min(1, { message: "This field is required." }),
        lastName: zod.string().min(1, { message: "This field is required." }),
        password: zod
            .string()
            .min(1, { message: "This field is required." })
            .min(6, { message: "Too short." }),
        confirmPassword: zod
            .string()
            .min(1, { message: "This field is required." })
            .min(6, { message: "Too short." }),
        checkbox: zod.string().array().nonempty({
            message: "Please select at least one.",
        }),
        gender: zod.string(),
        country: zod.string().min(1, { message: "This field is required." }),
        description: zod.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });

export const customerValidationSchema = toTypedSchema(customerSchema);

export type Customer = zod.infer<typeof customerSchema>;
