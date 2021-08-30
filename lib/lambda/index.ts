import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: JSON.stringify({
      message: "This was last updated on 30/8/21 @ 12:05 PM",
    }),
    statusCode: 200,
  };
}
