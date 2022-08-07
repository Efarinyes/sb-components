import './myLabel.css';
import { CustomFontColor } from '../stories/components/MyLabel.stories';

export interface MyLabelProps {
    /**
    * Here we can define the name of the label - Aquest es el missatge de l'etiqueta
    */
    label: string;
    /**
    * We can define the text size for CSS classes - Aquest es el tamany del text de l'etiqueta
    */
    size?: 'normal' |'h1'| 'h2'| 'h3';
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

export const Mylabel = ( {
    label = 'No-Label',
    size = 'normal',
    allCaps = false,
    color = 'primary',
    fontColor,
    backgroundColor = 'transparent',

}: MyLabelProps) => {
   
  return (
    <span className= { `label ${ size } text-${ color }`} style = {{ color: fontColor, backgroundColor }} >
        { (allCaps) ? label.toUpperCase() : label }
    </span>
  )
}

export default Mylabel;
