import { PeopleRepositoryMock } from "../__mocks__/PeopleRepositoryMock";
import {savePeople} from "../../src/core/interactors/savePeople/savePeople.interactor"
import {hopeResultsTranslateSpanish} from "../values"

let repository:PeopleRepositoryMock
let savePeopleCall

beforeEach( ()=>{
    repository= new PeopleRepositoryMock()
    savePeopleCall=  savePeople(repository)
})


describe("people save", ()=>{
      test("people saved, return object same object inserted; in array size 1",async ()=>{

          await savePeopleCall(hopeResultsTranslateSpanish)

          repository.assertLastSavedPeopleIs(hopeResultsTranslateSpanish)
      })


      
})