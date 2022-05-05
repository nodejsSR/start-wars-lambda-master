import { IPeople } from "../entities/IPeople";

export interface PeopleRepository{
    getPeoplesFromStartWarsApi():Promise<any>
    savePeople(people:IPeople):Promise<any>
    getPeopleFromDynamo():Promise<any>

}