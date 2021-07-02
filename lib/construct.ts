import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";
import * as path from "path";

export interface ConstructProps {
  /**
   * The visibility timeout to be configured on the SQS Queue, in seconds.
   *
   * @default Duration.seconds(3)
   */
  timeout?: cdk.Duration;
}

export class DemoFunction extends cdk.Construct {
  
  LambdaFunction: lambda.Function

  constructor(scope: cdk.Construct, id: string, props: ConstructProps = {}) {
    super(scope, id);

    this.LambdaFunction = new lambda.Function(this, "DemoFunction", {
      code: lambda.Code.fromAsset(path.resolve(__dirname, "./lambda")),
      handler: "index.handler",
      description: "An example function that comes from a shared CDK construct",
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: props.timeout,
    });
  }
}
