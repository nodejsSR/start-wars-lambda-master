import { PeopleRepositoryMock } from "../__mocks__/PeopleRepositoryMock"
import { findPeopleFromDynamo } from "../../src/core/interactors/PeopleFindFromDynamo/findPeopleFromDynamo.interactor"
import {hopeResultsTranslateSpanish} from "../values"


let repository:PeopleRepositoryMock
let findPeopleDynamoCall

beforeEach( ()=>{
    repository= new PeopleRepositoryMock()
    findPeopleDynamoCall=  findPeopleFromDynamo(repository)

    repository.whenSearchDynamoThenReturn(hopeResultsTranslateSpanish)
})



describe("People find Dynamo ",  () =>{

    test("people respository dynamo was called one time",async()=>{
       await findPeopleDynamoCall()
      repository.repositoryPeopleDynamoWasCalledTimes(1)
    
    })

    test("people all dynamo did return array People", async()=>{

        await  expect( findPeopleDynamoCall()).resolves.toEqual(hopeResultsTranslateSpanish)
    })
})
