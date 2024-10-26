import { SnackbarContent } from '@mui/material';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// Defino la interfaz para las propiedades del Snackbar
export interface AlondraHSProps {
    message: string;//Mensaje que se muestra en el Snackbar
    messagecolor:string;//Color de la letra del snackbar
    color: string; // Color de fondo del Snackbar
    icon: 'happy' | 'sad'; // Tipo de icono
}

// Componente de Snackbar personalizado
function AlondraHS(props: AlondraHSProps){
    //Paso el valor de las props a un objeto:
    const{
        message,
        messagecolor,
        color,
        icon
    }=props

    return(
        //Uso un Snackbar de la libreria MUI y lo personalizo
        <SnackbarContent
            message={
                <span style={{ display: 'flex', alignItems: 'center', color: messagecolor }}>
            {message}
                    {icon === 'happy' ? (
                        <SentimentSatisfiedAltIcon style={{ marginLeft: 4 }} />
                    ) : (
                        <SentimentVeryDissatisfiedIcon style={{ marginLeft: 4 }} />
                    )}
          </span>
            }
            style={{
                backgroundColor: color,
            }}
        />
    );

}
export default AlondraHS;

