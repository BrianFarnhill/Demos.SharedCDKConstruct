import { expect as expectCDK,  haveResourceLike } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { DemoFunction } from '../lib/construct';

test('Includes a lambda function in the output', () => {
    const app = new cdk.App();
    
    const stack = new cdk.Stack(app, "TestStack");
    new DemoFunction(stack, "TestFunction", {});
    const testStackOutput = app.synth().getStackArtifact("TestStack")

    expectCDK(testStackOutput).to(haveResourceLike("AWS::Lambda::Function", {
      Handler: "index.handler",
    }));
});
