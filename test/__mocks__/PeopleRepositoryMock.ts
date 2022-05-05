import { IPeople } from "../../src/core/entities/IPeople"
import { IPeopleFromSWA } from "../../src/core/entities/IPeopleFromSWA"
import { PeopleRepository } from "../../src/core/repository/PeopleRepository"

export class PeopleRepositoryMock implements PeopleRepository {
    
      private mockSave = jest.fn()
      private mockSearch = jest.fn()
      private mockSearchDynamo= jest.fn()



    async savePeople(people: IPeople): Promise<IPeople[]> {
        return  this.mockSave(people)

    }

    async getPeoplesFromStartWarsApi(): Promise<any> {
        return this.mockSearch()
    }

    async getPeopleFromDynamo(): Promise<any> {
        return this.mockSearchDynamo()
    }



    whenSearchThenReturn(value:IPeopleFromSWA[]):void{
        this.mockSearch.mockReturnValue(value)
    }

    repositoryPeopleWasCalledTimes(num:number):void{
        expect(this.mockSearch.mock.calls.length).toBe(num)
    }

    assertLastSavedPeopleIs(expected:IPeople[]):void{
        const mock= this.mockSave.mock
        const lastSavedPeople = mock.calls[mock.calls.length-1][0] as IPeople
        expect(lastSavedPeople).toEqual(expected)
    }

  

    whenSearchDynamoThenReturn(value:IPeople[]):void{
        this.mockSearchDynamo.mockReturnValue(value)
    }

    repositoryPeopleDynamoWasCalledTimes(num:number):void{
        expect(this.mockSearchDynamo.mock.calls.length).toBe(num)
    }

    

}
