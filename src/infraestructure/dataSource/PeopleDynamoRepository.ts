import { IPeople } from "src/core/entities/IPeople";
import { PeopleRepository } from "src/core/repository/PeopleRepository";
import { DynamoDB } from "aws-sdk"
import fetch from "node-fetch"
import {nanoid} from "nanoid"

const DYNAMODB_TABLE = "tablePeople"
const dynamoDb = new DynamoDB.DocumentClient()

export class PeopleDynamoRepository implements PeopleRepository{
     async getPeoplesFromStartWarsApi(): Promise<any> {
        let response= await fetch("https://swapi.py4e.com/api/people/")
        let json = await response.json()
        return json.results
    }
    async savePeople(people: IPeople): Promise<any> {
      
 
         const params = {
             TableName: DYNAMODB_TABLE,
             Item: {
               id: nanoid(),
               ...people
             }
           }
 
           try{
               
             await dynamoDb.put(params).promise()
             return [params.Item]
 
             }catch(err:any){
                 throw new Error(err.message)
             }
    }
   async  getPeopleFromDynamo(): Promise<any> {
        try{
              
            const response=  await dynamoDb.scan({ TableName: DYNAMODB_TABLE}).promise()
        
            return response.Items 
            
            }catch(err:any){
                throw new Error(err.message)
            }
    }
    
}