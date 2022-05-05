import { IPeople } from "src/core/entities/IPeople";
import { PeopleRepository } from "src/core/repository/PeopleRepository";


export const savePeople = (
    repository:PeopleRepository
    ) => async (people:IPeople)=>{

        verifyParams(people)
      

    return  await  repository.savePeople(people)

}

function verifyParams(people:IPeople){

    let params=[]

     for(const property in people){

        if(people[property]===null || typeof people[property]==="undefined"){
            params.push(property)
     }
    }

    if(params.length>0){
        throw new Error("fala enviar los siguiente parametros : "+params)
    }
}