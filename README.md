# GitHub Workflows

Simple GitHub workflow that runs on pull requests to check whether `.js` files in `/src` are linted and formatted.

Workflows are located under `.github/workflows`, while linter and formatter configs are in `eslint.config.js` and `prettier.config.js` respectively.

## Automate Deployment to Prod

I might try to automate deployment of files to NetSuite if it benefits our workflow.

Docs and tutorials for reference:

* [NetSuite CI/CD using GitHub Actions](https://medium.com/@diegosanches89/automating-netsuite-deployments-a5d574f7f87e)
* [SuiteCloud CLI documentation](https://github.com/oracle/netsuite-suitecloud-sdk/blob/master/packages/node-cli/README.md)
