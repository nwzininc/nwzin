export interface LoginFormProps{
    logoUrl: string;
    isBasicAuthAllowed?: boolean;
    isGoogleAuthAllowed?: boolean;
    isMicroSoftAuthAllowed?: boolean;
    handleLoginSubmit: (payload: LoginPayload) => void;
}

export interface LoginPayload {
    email: string;
    password: string;
}