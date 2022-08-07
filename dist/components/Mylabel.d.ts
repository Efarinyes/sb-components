/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Here we can define the name of the label - Aquest es el missatge de l'etiqueta
    */
    label: string;
    /**
    * We can define the text size for CSS classes - Aquest es el tamany del text de l'etiqueta
    */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
    /**
    * Capitalize the text of the label - Capitaliza el text de l'etiqueta
    */
    allCaps?: boolean;
    /**
    * Change the color of the label - Cambia el color de l'etiqueta
    */
    color?: 'primary' | 'secondary' | 'tertiary';
    /**
    * Change the font color of the label - Cambia el color de la font de l'etiqueta
    */
    fontColor?: string;
    /**
     * change the backGround color of the label - Cambia el color de fons de l'etiqueta
     */
    backgroundColor?: string;
}
export declare const Mylabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: MyLabelProps) => JSX.Element;
