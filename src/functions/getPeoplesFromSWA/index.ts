import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.getPeoplesFromSWA`,
  events: [
    {
      http: {
        method: 'get',
        path: 'peoples-swa',
        cors:true
      }
    }
  ]
}
