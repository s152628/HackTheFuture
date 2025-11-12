export interface Houses {
    
    id: string 
    name: string
    houseColours: string
    founder: string
    animal: string
    element: string
    ghost: string
    commonRoom: string
    heads: Heads[]
    traits: Traits[]
  
}
interface Heads{
id: string
firstName: string
lastName: string
}

interface Traits{
id: string
name: string
}

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

export interface ingredients {
    
    name: string;
}
export interface inventors {
    
    firstName: string;
    lastName: string;
}