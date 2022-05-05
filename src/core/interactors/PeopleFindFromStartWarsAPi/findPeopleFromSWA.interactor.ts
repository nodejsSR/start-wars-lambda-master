import { IPeople } from "src/core/entities/IPeople";
import { PeopleRepository } from "src/core/repository/PeopleRepository";
import {IPeopleFromSWA} from "../../entities/IPeopleFromSWA"

export const findPeopleFromSWA= (
   repository:PeopleRepository
)=> async ()=> {

    const peoples:IPeopleFromSWA[] = await repository.getPeoplesFromStartWarsApi()

    let formatingInSpanish:IPeople[]=[]
    

    peoples.forEach((data:IPeopleFromSWA)=>{


        let formating:IPeople ={
            nombre:data.name,
            altura:data.height,
            color_cabello:data.hair_color,
            color_piel:data.skin_color,
            color_ojos:data.eye_color,
            anio_nacimiento:data.birth_year,
            genero:data.gender,
            mundo_natal:data.homeworld,
            peliculas:data.films,
            especies:data.species,
            vehiculos:data.vehicles,
            naves_estelares:data.starships,
            creado:data.created,
            editado:data.edited,
            url:data.url
        }

        formatingInSpanish.push(formating)
    })

    return formatingInSpanish


}