import { Marque } from 'src/app/shared/interfaces/marque.interface';

export interface Camion {
    id: string;
    marque: Marque;
    genre: string;
    poids: string;
    date: Date;
    renseignement: string;
    email: string
}