import { Marque } from 'src/app/shared/interfaces/marque.interface';

export interface Bateau {
    id: string;
    marque: Marque;
    energie: string;
    longueur: string;
    place: string;
    puissance: string;
    date: Date;
    renseignement: string;
    email: string;
}