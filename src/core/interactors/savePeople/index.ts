
import { PeopleDynamoRepository } from "src/infraestructure/dataSource/PeopleDynamoRepository";
import { savePeople } from "./savePeople.interactor";

const repository = new PeopleDynamoRepository()

export default savePeople(repository)