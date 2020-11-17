import { Couleur } from 'src/app/shared/interfaces/couleur.interface';
import { Marque } from 'src/app/shared/interfaces/marque.interface';
import { TypeInterface } from 'src/app/shared/interfaces/typeInterface.interface';

export interface Moto {
    id: string;
    marque: Marque;
    cylindree: string;
    type: TypeInterface;
    couleur: Couleur;
    date: Date;
    renseignement: string;
    email: string;
}