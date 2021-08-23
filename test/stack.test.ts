import { Template } from '@aws-cdk/assertions';
import * as cdk from 'aws-cdk-lib';
import { DemoFunction } from '../lib/construct';

test('Includes a lambda function in the output', () => {
  const app = new cdk.App();

  const stack = new cdk.Stack(app, "TestStack");
  new DemoFunction(stack, "TestFunction", {});
  const testStackOutput = app.synth().getStackArtifact("TestStack").template;
  const assert = Template.fromJSON(testStackOutput)
  assert.hasResource("AWS::Lambda::Function", {
    Properties: {
      Handler: "index.handler",
    },
  });
});
