import { Couleur } from 'src/app/shared/interfaces/couleur.interface';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { TypeInterface } from 'src/app/shared/interfaces/typeInterface.interface';

export interface Voiture {
    id: string;
    marque: Marque;
    type: TypeInterface;
    couleur: Couleur;
    date: Date;
    observation: string;
    email: string;
    status: boolean;
    photo: any;
}
