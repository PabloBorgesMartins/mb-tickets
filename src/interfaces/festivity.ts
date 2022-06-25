

export interface IFestivity {
    id: number;
    title: string;
    description: string;
    amount: number;
    image: string;
    date: string;
    time: string;
    state: string;
    city: string;
    street: string;
    number: number;
    userId: number;
    createdAt: Date;
}

export interface IFestivityData {
    title: string;
    description: string;
    amount: number;
    image: string;
    date: string;
    userId: number;
}