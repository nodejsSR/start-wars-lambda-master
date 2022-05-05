import 'source-map-support/register';
import { formatJSONResponse, formatJSONResponseError } from '@libs/apiGateway';
import savePeople from 'src/core/interactors/savePeople';



export const savePeopleHandler = async (event) => {

    try{

        
        let data= await  savePeople( JSON.parse(event.body))
         return formatJSONResponse(data);

    }catch(e){
        
        return formatJSONResponseError({
          message: e.message,
          event,
        });
    }


}
