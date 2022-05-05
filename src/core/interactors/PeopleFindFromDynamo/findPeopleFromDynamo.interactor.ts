import { PeopleRepository } from "src/core/repository/PeopleRepository";

export const findPeopleFromDynamo= (
   repository:PeopleRepository
)=> async ()=> {
    return await repository.getPeopleFromDynamo()
}