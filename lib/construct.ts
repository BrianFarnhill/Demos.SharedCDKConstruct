import * as cdk from "aws-cdk-lib";
import { aws_lambda as lambda } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as path from "path";

export interface ConstructProps {
  /**
   * The visibility timeout to be configured on the SQS Queue, in seconds.
   *
   * @default Duration.seconds(3)
   */
  timeout?: cdk.Duration;

  /**
   * Whether or not a timestamp should be added to the description to force a lambda update on each deployment
   */
  includeTimestamp?: boolean;
}

export class DemoFunction extends Construct {

  LambdaFunction: lambda.Function

  constructor(scope: Construct, id: string, props: ConstructProps = {}) {
    super(scope, id);

    if (props.timeout && props.timeout.toSeconds() > 300) {
      throw new Error('This lambda must timeout in 5 minutes or less');
    }

    let description = 'An example function that comes from a shared CDK construct';
    if (props.includeTimestamp === undefined || props.includeTimestamp === true) {
      description += ` - last synthesised at ${Date.now().toString()}`;
    }

    this.LambdaFunction = new lambda.Function(this, "DemoFunction", {
      code: lambda.Code.fromAsset(path.resolve(__dirname, "./lambda")),
      handler: "index.handler",
      description,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: props.timeout,
    });
  }
}
