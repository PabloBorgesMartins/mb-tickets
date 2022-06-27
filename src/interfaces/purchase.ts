import { IFestivity } from './festivity';

export interface IPurchase {
    festivity: IFestivity;
    code: string;
}

export interface IPurchaseData {
    fullName: string;
    email: string;
    phoneNumber: string;
    cardNumber: string;
    CVV: string;
    expirationDate: Date;
}