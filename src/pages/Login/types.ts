
export interface IFormLogin {
    email: string;
    password: string;
    setIsCovered?: boolean;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: ''
}
