import { LoginSuccessAPISchema, MetaAPISuccessSchema } from "./types";

const mockSuccessResponse: LoginSuccessAPISchema = {
        accessToken: 'jkhfkja',
        refreshToken: 'jkhfkja',
        currentUser: {
          email: 'dg' , 
          name: 'dananjaya',
          id: '983498r3',
          isAdmin: true,
          role: "admin",
          profileUrl: "https://res.cloudinary.com/nwzin/image/upload/v1648142995/ben-parker-OhKElOkQ3RE-unsplash_zau5gn.jpg",
          groupIds: ['finance', 'it']
        }
}

export const loginSuccessMock = () => {
    return new Promise((resolve) => setTimeout(()=>{
        resolve({
            status: true,
            data: mockSuccessResponse,
            error: null
        })
    }, 2000));
}

export const loginFailureMock = () => {
    return new Promise((resolve) => setTimeout(()=>{
        resolve({
            status: false,
            data: null,
            error: [{ name: 'email', message: 'Email Already Exist'}]
        })
    }, 2000));
}

const metaSuccesResponse: MetaAPISuccessSchema = {
    currentUser: {
        email: 'dg' , 
        name: 'dananjaya',
        id: '983498r3',
        isAdmin: true,
        role: "admin",
        profileUrl: "https://res.cloudinary.com/nwzin/image/upload/v1648142995/ben-parker-OhKElOkQ3RE-unsplash_zau5gn.jpg",
        groupIds: ['finance', 'it']
    },
    accessToken: "jkhfkja",
    appMeta: {
        company: 'ITC',
        logoUrl: 'https://res.cloudinary.com/nwzin/image/upload/v1648574236/itc-limited-logo-black-and-white_imet3x.png',
        subdomain: 'ITC',
        isActive: true,
        nextBillingDate: + new Date(),
        serviceId: "ytryewtuyr"
    }
}


export const metaSuccessMock = () => {
    return new Promise((resolve) => setTimeout(()=>{
        resolve({
            status: true,
            data: metaSuccesResponse,
            error: null
        })
    }, 1000));
}

export const metaFailureMock = () => {
    return new Promise((resolve) => setTimeout(()=>{
        resolve({
            status: false,
            data: null,
            error: null,
        })
    }, 1000));
}
