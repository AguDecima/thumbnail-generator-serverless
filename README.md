# PoC: Thumbnail Generator API

## Description
Simple API that generates thumbnails from a source image

## Arquitecture

![Alt text](./docs/thumbnail.drawio.png?raw=true "Title")

## Dependencies

* [NodeJs](https://nodejs.org/en/)
* [AWS Cli](https://aws.amazon.com/es/cli/)
* [Serverless Framework](https://www.serverless.com/)

## How to use

Before running the project please ensure that all the dependencies are installed in your system. Then follow the next:

##### Config Auth0

Create an Auth API and downloads the certificate

#### Adding secreto to secret  manager

Add secret manager your certificate

```sh
aws secretsmanager create-secret \
    --name certificate \
    --secret-string file://mycreds.json
```

mycreds.json
```json
{
    "value": "---CERTIFICATE---"
}
```

or if you prefer you can upload the certificate in the aws console

### Deploy

You can run `./scripts/deploy.sh` but first you need to add permisions with `chmod u+x deploy.sh`

Or you can deploy with serverless commands

```sh
sls deploy --stage <stage> --verbose
```

to remove the stack you must run `.scripts/deploy.sh` or `sls remove --stage <stage>`

