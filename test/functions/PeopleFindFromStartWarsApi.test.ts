import { PeopleRepositoryMock } from "../__mocks__/PeopleRepositoryMock"
import { findPeopleFromSWA } from "../../src/core/interactors/PeopleFindFromStartWarsAPi/findPeopleFromSWA.interactor"
import { hopeResults, hopeResultsTranslateSpanish } from "../values"

let respository:PeopleRepositoryMock
let findPeopleCall

beforeEach(()=>{

    respository = new PeopleRepositoryMock()
    findPeopleCall = findPeopleFromSWA(respository)

    respository.whenSearchThenReturn(hopeResults)
    

})


describe("evaluate People Find From Start Wars Api",()=>{

    test("evaluate People Find",async ()=>{

        await expect(findPeopleCall()).resolves.toEqual(hopeResultsTranslateSpanish)

    })

})