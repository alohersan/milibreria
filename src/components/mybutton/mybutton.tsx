import {MouseEventHandler} from 'react';
import Button from '@mui/material/Button';

//Declaro la interface del componente.
export interface MyButtonProps {
    text: string; //prop text de tipo string. Es el texto del botón
    txtcolor: string; //prop txtcolor de tipo string. Es el color del texto del botón
    bgcolor: string; //prop bgcolor de tipo string. Es el color del botón
    bordercolor: string;//prop bordercolor de tipo string. Es el color del borde del botón
    borderwidth: string;//prop de tipo string. es el ancho del borde del boton
    hovertxtcolor: string//prop de tipo string. cambia el color del texto del boton al pasar el raton
    hoverbgcolor: string//prop de tipo string.cambiar el color del boton al pasar el raton
    size?: "small" | "medium" | "large"; //prop size. El ? quiere decir que la prop es opcional. Además //le digo los posibles valores. Se entiende que es string.
    disabled?: boolean; //prop disabled. Es opcional y es de tipo boolean
    onClick?: MouseEventHandler<HTMLButtonElement>; //prop onClick opcional y responde al //evento de picar el botón
}

//Defino mi componente CustomButton y le digo que las props son las que definí arriba
function MyButton(props: MyButtonProps) {
//Paso el valor de las props a un objeto:
    const {
        bordercolor,
        borderwidth,
        hoverbgcolor,
        hovertxtcolor,
        bgcolor,
        text,
        txtcolor,
        disabled,
        onClick,
        size
    } = props
    return (
//Uso el Button de la librería MUI y lo personalizo con las props que pasan a mi componente.
        <Button
            type='button'
            onClick={onClick}
            disabled={disabled}
            size={size}
            sx={{
                backgroundColor: bgcolor,
                color: txtcolor,
                borderColor: bordercolor,
                borderWidth: borderwidth,
                ':hover': {
                    backgroundColor: hoverbgcolor,
                    color: hovertxtcolor,
                }

            }}
        >
            {text}
        </Button>
    )
}

export default MyButton;