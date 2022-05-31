import { APISchema, APIServiceStatus } from "../../utilities/apiService/types";

export type Roles  = "user" | "admin";

export interface AuthWrapperProps{
   authProtected: boolean;
   authRole: Roles;
   isLoginPage: boolean;
};

export interface CurrentUser{
    name: string;
    email: string;
    profileUrl: string;
    id: string;
    isAdmin: boolean;
    groupIds: string[];
    role: Roles;
}

export interface AuthState extends APIServiceStatus{
    isLoggedIn: boolean;
    accessToken?: string;
    refreshToken?: string;
    currentUser?: CurrentUser;
    authAPIstatus?: "fulfilled" | "pending";
    appMeta?: AppMeta;
}

export interface LoginAPIPayload {
    email: string;
    password: string;
}

export interface LoginSuccessAPISchema{
    accessToken: string;
    refreshToken: string;
    currentUser: CurrentUser;
}
export interface LoginErrorAPISchema{
    email: string;
    password: string;
}

export type LoginAPISchema = APISchema<LoginSuccessAPISchema | null, LoginErrorAPISchema | null>;

export interface AppMeta{
    company: string;
    logoUrl: string;
    subdomain: string;
    isActive: boolean;
    nextBillingDate: number;
    serviceId: string;
}

export interface MetaAPISuccessSchema{
    accessToken: string;
    currentUser: CurrentUser;
    appMeta: AppMeta;
}

export type MetaAPISchema = APISchema<MetaAPISuccessSchema | null,  null>;