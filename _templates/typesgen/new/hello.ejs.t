---
to: index.d.ts
---
declare namespace WebpackDevServer {
<%- devServerTypes.replace(/\\n/g,'\n') %>
}

declare module 'webpack' {
  /**
  * Can be used to configure the behaviour of webpack-dev-server when
  * the webpack config is passed to webpack-dev-server CLI.
  */
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}



