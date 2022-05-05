import 'source-map-support/register';
import { formatJSONResponse, formatJSONResponseError } from '@libs/apiGateway';
import PeopleFindFromDynamo from 'src/core/interactors/PeopleFindFromDynamo';



export const getPeoplesFromDynamo = async (event) => {

    try{

         return formatJSONResponse({
            data: await PeopleFindFromDynamo()
          });

    }catch(e){
        
        return formatJSONResponseError({
          message: e.message,
          event,
        });
    }


}
