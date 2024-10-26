import {MouseEventHandler} from 'react';
import IconButton from '@mui/material/IconButton'
import FavouriteBorderIcon from '@mui/icons-material/FavoriteBorder'

//Declaro la interface del componente.
export interface MyFavouriteBorderProps{
    color:'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';//prop del color del FavouriteIcon
    disabled?: boolean;//prop disabled.Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>;//prop onClick opcional y responde al //evento de picar el botón
}

//Definit el componente Myfavouriteborder y le digo que las props son las que defini arriba
function MyFavouriteBorder(props: MyFavouriteBorderProps){
    //Paso el valor de las props a un objeto:
    const {
        color,
        disabled,
        onClick,
    }=props

    return(
        //Uso el IconButton de la libreria MUI y lo personalizo con las props que pasan a mi componente
        <IconButton
            onClick={onClick}
            disabled={disabled}
            color={color}
        ><FavouriteBorderIcon/></IconButton>

    )
}
export default MyFavouriteBorder;