import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getPeoplesFromDynamo`,
  events: [
    {
      http: {
        method: 'get',
        path: 'peoples-dymamo',
        cors:true
      }
    }
  ]
}
