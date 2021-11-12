import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

export async function handler(event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    body: JSON.stringify({
      message: "This was last updated on 12/11/21 @ 2:11 PM",
    }),
    statusCode: 200,
  };
}
