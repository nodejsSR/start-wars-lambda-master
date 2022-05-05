import 'source-map-support/register';
import { formatJSONResponse, formatJSONResponseError } from '@libs/apiGateway';
import PeopleFindFromStartWarsAPi from 'src/core/interactors/PeopleFindFromStartWarsAPi';



export const getPeoplesFromSWA = async (event) => {

    try{

        

         return formatJSONResponse({
            data: await PeopleFindFromStartWarsAPi(),
            event,
          });

    }catch(e){
        
        return formatJSONResponseError({
          message: e.message,
          event,
        });
    }


}
