export interface SignupContainerProps {
    key?: string;
}
export interface SetUpPayload {
  colorScheme: Record<string, string>;
  subDomain: string;
  companyName: string;
  logo: string;
}

export interface LocalSignupPayload {
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}
export interface GoogleSignupPayload {
  token: string;
  name: string;
  email: string;
  id: string;
}
export type SignUpPayload = GoogleSignupPayload | LocalSignupPayload | null;
