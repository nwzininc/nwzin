import { SignUpPayload } from "../../types";

export interface SignUpFormProps{
    handleSignup: (payload: SignUpPayload) => void;
}