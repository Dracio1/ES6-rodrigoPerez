import{obtenerPcias,obtenerDptos,obtenerLocalidades} from './03-promesas/libs/functiones-exportadas.js'


// Funcion para obtener todos los datos
const consultarDatos= async ()=> {
    try {
        const provincias =await obtenerPcias();
        const dptos =await obtenerDptos();
        const localidades =await obtenerLocalidades();

        console.log(provincias);
        console.log(dptos);
        console.log(localidades);
    } catch (error) {
        console.error (error)
    }
    
}

consultarDatos();

