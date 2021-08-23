import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: JSON.stringify({
      message: "This was last updated on 12/8/21 @ 3:23PM",
    }),
    statusCode: 200,
  };
}
