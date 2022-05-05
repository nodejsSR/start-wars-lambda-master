import { handlerPath } from '@libs/handlerResolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.savePeopleHandler`,
  events: [
    {
      http: {
        method: 'post',
        path: 'people',
        cors:true
      }
    }
  ]
}
