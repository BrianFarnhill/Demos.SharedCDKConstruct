import { Template } from '@aws-cdk/assertions';
import * as cdk from 'aws-cdk-lib';
import { Duration } from 'aws-cdk-lib';
import { DemoFunction } from '../lib/construct';


/**
 * A simple snapshot test
 */
 test('Matches SnapShot', () => {
  const app = new cdk.App();

  const stack = new cdk.Stack(app, "TestStack");
  new DemoFunction(stack, "TestFunction", {
    includeTimestamp: false,
  });
  const testStackOutput = app.synth().getStackArtifact("TestStack").template;

  expect(Template.fromJSON(testStackOutput)).toMatchSnapshot();
});

/**
 * A Simple fine-grained assertion
 */
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

/**
 * Examples of basic validation tests
 */
test('Accepts a valid timeout value under 5 minutes', () => {
  const app = new cdk.App();
  expect(() => {
    const stack = new cdk.Stack(app, "TestStack");
    new DemoFunction(stack, "TestFunction", {
      timeout: Duration.minutes(3),
    })
  }).not.toThrow();
});
test('Rejects an invalid timeout value over 5 minutes', () => {
  const app = new cdk.App();
  expect(() => {
    const stack = new cdk.Stack(app, "TestStack");
    new DemoFunction(stack, "TestFunction", {
      timeout: Duration.minutes(10),
    })
  }).toThrow('This lambda must timeout in 5 minutes or less');
});
