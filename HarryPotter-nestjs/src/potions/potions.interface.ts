export interface Potions {
    
    name: string;
    effect: string;
    sideEffects: string;
    characteristics: string;
    time: string;
    difficulty: string;
    ingredients: ingredients[];
    inventors: inventors[];
    manufacturer: string;
}

interface ingredients {
    
    name: string;
}
interface inventors {
    
    firstName: string;
    lastName: string;
}