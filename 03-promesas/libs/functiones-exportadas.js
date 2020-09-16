

// export const obtenerPcias = async () => {
//     try {
//         const consulta = await fetch('./databases/provincias.json');
//         const pcias = await consulta.json();
//         return pcias
//     } catch (error) {
//         throw Error('Error al cargar las provincias')
//     }
// }

// export const obtenerDptos = async () => {
//     const consulta = await fetch('./databases/departamentos.json');
//     const dptos = await consulta.json();
//     return dptos
// }

// export const obtenerLocalidades = async () => {
//     const consulta = await fetch('./databases/localidades.json');
//     const localidades = await consulta.json();
//     return localidades
// }

const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
const obtenerPcias= async ()=> {
    await retrasar(1800);
    try {
        const consulta = await fetch('./03-promesas/databases/provincias.json')
        const resultado= await consulta.json()
        return resultado;
    } catch (error) {
        throw Error('Error al cargar las Provincias')
    }
    
}

// Función que retorna los datos de departamentos
const obtenerDptos= async ()=> {
    await retrasar(1391);
    try {
        const consulta = await fetch('./03-promesas/databases/departamentos.json')
        const resultado= await consulta.json()
        return resultado;
    } catch (error) {
        throw Error('Error al cargar los Departamentos')
    }
    
}

// Función que retorna los datos de localidades
const obtenerLocalidades= async ()=> {
    await retrasar(900);
    try {
            const consulta = await fetch('./03-promesas/databases/localidades.json')
            const resultado= await consulta.json()
            return resultado;
    } catch (error) {
        throw Error('Error al cargar las Localidades')
    }

}

export {
     obtenerPcias
    ,obtenerDptos
    ,obtenerLocalidades
}
// module.exports = {
//     async obtenerPcias (){
//         const consulta = await (await fetch('./databases/provincias.json'));
//         const pcias = await consulta.json();
//         return pcias
//     },
//     async obtenerDptos (){
//         const consulta = await fetch('./databases/departamentos.json');
//         const dptos = await consulta.json();
//         return dptos
//     },
//     async obtenerLocalidades() {
//         const consulta = await fetch('./databases/localidades.json');
//         const localidades = await consulta.json();
//         return localidades
//     }
// }






