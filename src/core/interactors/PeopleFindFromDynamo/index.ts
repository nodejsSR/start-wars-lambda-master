import { PeopleDynamoRepository } from "src/infraestructure/dataSource/PeopleDynamoRepository";
import { findPeopleFromDynamo } from "./findPeopleFromDynamo.interactor";

const repository = new PeopleDynamoRepository()
export default findPeopleFromDynamo(repository)