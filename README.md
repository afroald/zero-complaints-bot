# zero-complaints-bot

> A GitHub App built with [Probot](https://github.com/probot/probot) that The solution to all your OSS problems.

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t zero-complaints-bot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> zero-complaints-bot
```

## Contributing

If you have suggestions for how zero-complaints-bot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2022 Roald Hacquebord <roald@zielma.kr>
