declare namespace WebpackDevServer {
export interface Configuration {
    /**
     * Broadcasts the server via ZeroConf networking on start.
     * https://webpack.js.org/configuration/dev-server/#devserverbonjour
     */
    bonjour?: boolean | { [key: string]: any };
    /**
     * Specifies client properties.
     * https://webpack.js.org/configuration/dev-server/#devserverclient
     */
    client?: Client;
    /**
     * Enable gzip compression for everything served.
     * https://webpack.js.org/configuration/dev-server/#devservercompress
     */
    compress?: boolean;
    /**
     * Provide options to webpack-dev-middleware which handles webpack assets.
     * https://webpack.js.org/configuration/dev-server/#devserverdevmiddleware
     */
    devMiddleware?: { [key: string]: any };
    /**
     * Defines routes which are enabled by default, on by default and allows localhost.
     * https://webpack.js.org/configuration/dev-server/#devserverfirewall
     */
    firewall?: string[] | boolean;
    /**
     * Adds headers to all responses.
     * https://webpack.js.org/configuration/dev-server/#devserverheaders
     */
    headers?: { [key: string]: any };
    /**
     * When using the HTML5 History API, the index.html page will likely have to be served in
     * place of any 404 responses.
     * https://webpack.js.org/configuration/dev-server/#devserverhistoryapifallback
     */
    historyApiFallback?: boolean | { [key: string]: any };
    /**
     * Specify a host to use. If you want your server to be accessible externally.
     * https://webpack.js.org/configuration/dev-server/#devserverhost
     */
    host?: null | string;
    /**
     * Enable webpack's Hot Module Replacement feature.
     * https://webpack.js.org/configuration/dev-server/#devserverhot
     */
    hot?: boolean | HotEnum;
    /**
     * Serve over HTTP/2 using spdy.
     * https://webpack.js.org/configuration/dev-server/#devserverhttp2
     */
    http2?: boolean;
    /**
     * By default, dev-server will be served over HTTP. It can optionally be served over HTTP/2
     * with HTTPS. https://webpack.js.org/configuration/dev-server/#devserverhttps
     */
    https?: boolean | HTTPSClass;
    /**
     * By default, the dev-server will reload/refresh the page when file changes are detected.
     * https://webpack.js.org/configuration/dev-server/#devserverlivereload
     */
    liveReload?: boolean;
    /**
     * Provides the ability to execute custom middleware after all other middleware internally
     * within the server. https://webpack.js.org/configuration/dev-server/#devserverafter
     */
    onAfterSetupMiddleware?: any;
    /**
     * Provides the ability to execute custom middleware prior to all other middleware
     * internally within the server.
     * https://webpack.js.org/configuration/dev-server/#devserverbefore
     */
    onBeforeSetupMiddleware?: any;
    /**
     * Provides an option to execute a custom function when webpack-dev-server starts listening
     * for connections on a port. https://webpack.js.org/configuration/dev-server/#onlistening
     */
    onListening?: any;
    /**
     * Tells dev-server to open the browser after server had been started. Set it to true to
     * open your default browser. https://webpack.js.org/configuration/dev-server/#devserveropen
     */
    open?: Array<OpenObject | string> | boolean | OpenObject | string;
    /**
     * Specify a port number to listen for requests on.
     * https://webpack.js.org/configuration/dev-server/#devserverport
     */
    port?: number | null | string;
    /**
     * Proxying some URLs can be useful when you have a separate API backend development server
     * and you want to send API requests on the same domain.
     * https://webpack.js.org/configuration/dev-server/#devserverproxy
     */
    proxy?: any[] | { [key: string]: any };
    /**
     * When using dev server and you're proxying dev-server, the client script does not always
     * know where to connect to. It will try to guess the URL of the server based on
     * window.location, but if that fails you'll need to use this.
     * https://webpack.js.org/configuration/dev-server/#devserverpublic
     */
    public?: string;
    /**
     * It takes a boolean and if true (default on CLI), the server will close and exit the
     * process on SIGINT and SIGTERM.
     * https://webpack.js.org/configuration/dev-server/#devserversetupexitsignals
     */
    setupExitSignals?: boolean;
    /**
     * It is possible to configure advanced options for serving static files from directory. See
     * the Express documentation for the possible options.
     * https://webpack.js.org/configuration/dev-server/#devserverstatic
     */
    static?: Array<StaticObject | string> | boolean | StaticObject | string;
    /**
     * This option allows us either to choose the current devServer transport mode for
     * client/server individually or to provide custom client/server implementation.
     * https://webpack.js.org/configuration/dev-server/#devservertransportmode
     */
    transportMode?: TransportModeClass | TransportModeEnum;
    /**
     * List of files to watch for file changes and serve.
     * https://webpack.js.org/configuration/dev-server/#devserverwatchfiles
     */
    watchFiles?: Array<WatchFilesObject | string> | WatchFilesObject | string;
}

/**
 * Specifies client properties.
 * https://webpack.js.org/configuration/dev-server/#devserverclient
 */
export interface Client {
    /**
     * Tells clients connected to devServer to use the provided host.
     */
    host?:    string;
    logging?: Logging;
    /**
     * Tells devServer to inject a client entry.
     */
    needClientEntry?: any;
    /**
     * Tells devServer to inject a Hot Module Replacement entry.
     */
    needHotEntry?: any;
    overlay?:      boolean | OverlayObject;
    /**
     * Tells clients connected to devServer to use the provided port.
     */
    path?: string;
    /**
     * Tells clients connected to devServer to use the provided path to connect.
     */
    port?: number | null | string;
    /**
     * Print compilation progress in percentage in the browser.
     */
    progress?: boolean;
}

export enum Logging {
    Error = "error",
    Info = "info",
    Log = "log",
    None = "none",
    Verbose = "verbose",
    Warn = "warn",
}

export interface OverlayObject {
    /**
     * Show a full-screen overlay in the browser when there are compiler errors.
     */
    errors?: boolean;
    /**
     * Show a full-screen overlay in the browser when there are compiler warnings.
     */
    warnings?: boolean;
}

export enum HotEnum {
    Only = "only",
}

export interface HTTPSClass {
    /**
     * Path to an SSL CA certificate.
     */
    cacert?: any;
    /**
     * Path to an SSL certificate.
     */
    cert?: any;
    /**
     * Path to an SSL key.
     */
    key?: any;
    /**
     * Passphrase for a pfx file.
     */
    passphrase?: string;
    /**
     * Path to an SSL pfx file.
     */
    pfx?: any;
    /**
     * Request for an SSL certificate.
     */
    requestCert?: boolean;
}

export interface OpenObject {
    /**
     * Open specified browser.
     */
    app?: string[] | string;
    /**
     * Open specified route in browser.
     */
    target?: string[] | boolean | string;
}

export interface StaticObject {
    /**
     * Directory for static contents.
     */
    directory?: string;
    /**
     * The bundled files will be available in the browser under this path.
     */
    publicPath?: string[] | string;
    /**
     * Tells dev-server to use serveIndex middleware when enabled.
     */
    serveIndex?:    boolean | { [key: string]: any };
    staticOptions?: { [key: string]: any };
    /**
     * Watch for files in static content directory.
     */
    watch?: boolean | { [key: string]: any };
}

export interface TransportModeClass {
    client?: string;
    server?: any;
}

export enum TransportModeEnum {
    Sockjs = "sockjs",
    Ws = "ws",
}

export interface WatchFilesObject {
    options?: { [key: string]: any };
    paths?:   string[] | string;
}
}

import { Configuration } from 'webpack';
declare module 'webpack' {
  /**
  * Can be used to configure the behaviour of webpack-dev-server when
  * the webpack config is passed to webpack-dev-server CLI.
  */
  interface Configuration {
    devServer?: WebpackDevServer.Configuration;
  }
}



