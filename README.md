# Demo CDK construct shared via CodeArtifact

This is an example of a custom CDK construct that is designed to be shared for other CDK projects
to consume it. [AWS CodeArtifact](https://aws.amazon.com/codeartifact/) is a great place to share
internal packages without needing to publish them to a public repository source, so this example
includes commands to demonstrate that workflow.

## Setup

Before running this code you should [Create a CodeArtifact repository](https://docs.aws.amazon.com/codeartifact/latest/ug/getting-started.html)
that you will publish this construct to. Once this is complete, set the below environment
variables based on the values of what you just created.

``` bash
export REPO_NAME="[Your repo name]"
export DOMAIN_NAME="[Your domain name]"
export OWNER_ACCOUNT="[Your AWS Account ID]"
```

To authenticate to CodeArtifact, you can use the AWS CLI command. This has been configured to run
in this `login` command for this package (leveraging the environment variables you just set). To
log in run this command.

```bash
npm run login
```

This will log you in to CodeArtifact for 12 hours, using the credentials you have configured for
the AWS CLI.

## Building

To build this package, use `npm run build`. This will compile the typescript to JavaScript that is
ready to publish.

## Testing

As this is a demo package, the unit tests are not exhaustive, but a basic test is included to
demonstate the concepts. Run `npm run test` to execute the tests. 

## Publishing

When you want to publish a version of the package, be sure to increment the version number in the
`package.json` file, then run `npm publish`. This will publish to AWS CodeArtifact (as long as you
have run the login command first).

## Other things you could do with this package

Right now it is designed to be manually published, but an end to end flow would leverage a release
pipeline and build process that did the tests, build and publish for you when new commits are added.
I will try to add that at some point, but if you want to explore it yourself let me know

## Feedback

Record issues and feedback in the [Issues](https://github.com/BrianFarnhill/Demos.SharedCDKConstruct/issues)
tab of the GitHub repository.
