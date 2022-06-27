import { api } from "../services/api";

export interface IFestivity {
    id: number;
    title: string;
    description: string;
    amount: number;
    image: string;
    date: Date;
    state: string;
    city: string;
    district: string;
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
    date: Date;
    state: string;
    city: string;
    district: string;
    street: string;
    number: number;
    userId: number;
}


interface ResCreateFestivity {
    festivity: IFestivity;
}
interface ResShowFestivity {
    festivity: IFestivity;
}
interface ResGetFestivities {
    festivities: IFestivity[];
}

/* API FUNCTIONS */
export const handleCreateFestivity = async (data: IFestivityData): Promise<ResCreateFestivity> => {
    try {
        let response = await api.post<ResCreateFestivity>('festivities', data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getFestivities = async (): Promise<ResGetFestivities> => {
    try {
        let response = await api.get<ResGetFestivities>('festivities');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const showFestivity = async (id: string): Promise<ResShowFestivity> => {
    try {
        let response = await api.get<ResShowFestivity>('festivities/' + id);
        return response.data;
    } catch (error) {
        throw error;
    }
};