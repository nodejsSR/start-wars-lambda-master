import type { AWS } from '@serverless/typescript';


import getPeoplesFromSWA from '@functions/getPeoplesFromSWA'
import savePeoplesHandler from '@functions/savePeopleHandler'
import getPeopleFromDynamo from '@functions/getPeopleFromDynamo'

const serverlessConfiguration: AWS = {
  service: 'start-wars-api-reto',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    tablePeople:"tablePeople"
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    profile:"startwars-api",
    stage:"dev",
    region:"us-east-1",
   
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements:[
      {
        Effect: 'Allow',
        Action: [
            'dynamodb:DescribeTable',
            'dynamodb:Query',
            'dynamodb:Scan',
            'dynamodb:GetItem',
            'dynamodb:PutItem',
            'dynamodb:UpdateItem',
            'dynamodb:DeleteItem'
        ],
        Resource: [
            {"Fn::GetAtt": [ 'DynamoTablePeople', 'Arn' ]}
        ]
    }
    ]
  },
  // import the function via paths
  functions: {  getPeoplesFromSWA,savePeoplesHandler,getPeopleFromDynamo },

  resources:{
    Resources:{
      
      DynamoTablePeople:{
        Type: 'AWS::DynamoDB::Table',
      //  DeletionPolicy: 'Retain',
        Properties: {
            TableName: '${self:custom.tablePeople}',
            AttributeDefinitions: [
                { AttributeName: 'id', AttributeType: 'S' }
            ],
            KeySchema: [
                { AttributeName: 'id', KeyType: 'HASH' }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 1,
                WriteCapacityUnits:1
            }
        }
      }
    }
  }
};

module.exports = serverlessConfiguration;
