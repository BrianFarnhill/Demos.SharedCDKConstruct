import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: JSON.stringify({
      message: "This was last updated on 28/10/21 @ 11:23 PM",
    }),
    statusCode: 200,
  };
}
