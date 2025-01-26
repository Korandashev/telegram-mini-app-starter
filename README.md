# Telegram Mini App Starter Kit (Preact, TypeScript, CSS Modules, Webpack)

This project is a starter template for developing Telegram Mini Apps. It provides a configured environment for quickly starting work on your application.

## Key Features

- **Preact**
- **TypeScript**
- **CSS Modules**
- **Webpack**
- **Docker**

## How to Get Started

#### 1. Clone the repository

#### 2. Start the development server (using Docker):

```shell
docker compose up -d
```

This will launch the development server on port 4000 (env `FRONTEND_PORT`). You can open the application at http://localhost:4000

#### 3. Stop the development server:

```shell
docker compose down
```

#### 4. Build the production version:

```shell
npm run build
```

The build output will be in the `build` folder.

## Telegram Mini App Configuration

1. Contact [@BotFather](https://t.me/BotFather) in Telegram and follow the instructions to create a bot.

2. Configure the web application:
  - Use the `/setwebapp` command for your bot.
  - Set the URL of your mini app to point to your server's IP address or hostname.
    * **Note**: Make sure to use `https://` _(not `http://`)_

## Additional Resources

- [Preact Documentation](https://preactjs.com/guide/v10/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Telegram Mini Apps Documentation](https://core.telegram.org/bots/webapps)
