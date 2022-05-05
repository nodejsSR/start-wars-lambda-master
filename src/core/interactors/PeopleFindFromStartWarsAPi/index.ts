import { PeopleDynamoRepository } from "src/infraestructure/dataSource/PeopleDynamoRepository";
import { findPeopleFromSWA } from "./findPeopleFromSWA.interactor";


const respository = new PeopleDynamoRepository()

export default findPeopleFromSWA(respository)