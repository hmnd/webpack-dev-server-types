declare namespace WebpackDevServer {
export interface Configuration {
    allowedHosts?:            string[] | string;
    bonjour?:                 boolean | { [key: string]: any };
    client?:                  boolean | ClientClass;
    compress?:                boolean;
    devMiddleware?:           { [key: string]: any };
    headers?:                 any;
    historyApiFallback?:      boolean | { [key: string]: any };
    host?:                    string;
    hot?:                     boolean | HotEnum;
    http2?:                   boolean;
    https?:                   boolean | HTTPSClass;
    ipc?:                     boolean | string;
    liveReload?:              boolean;
    magicHtml?:               boolean;
    onAfterSetupMiddleware?:  any;
    onBeforeSetupMiddleware?: any;
    onListening?:             any;
    open?:                    Array<OpenObject | string> | boolean | OpenObject | string;
    port?:                    number | string;
    proxy?:                   any[] | { [key: string]: any };
    setupExitSignals?:        boolean;
    static?:                  Array<StaticObject | string> | boolean | StaticObject | string;
    watchFiles?:              Array<WatchFilesObject | string> | WatchFilesObject | string;
    webSocketServer?:         any;
}

export interface ClientClass {
    logging?:            ClientLogging;
    overlay?:            boolean | ClientOverlayClass;
    progress?:           boolean;
    webSocketTransport?: string;
    webSocketURL?:       ClientWebSocketURLClass | string;
}

export enum ClientLogging {
    Error = "error",
    Info = "info",
    Log = "log",
    None = "none",
    Verbose = "verbose",
    Warn = "warn",
}

export interface ClientOverlayClass {
    /**
     * Enables a full-screen overlay in the browser when there are compiler errors.
     */
    errors?: boolean;
    /**
     * Enables a full-screen overlay in the browser when there are compiler warnings.
     */
    warnings?: boolean;
}

export interface ClientWebSocketURLClass {
    /**
     * Tells clients connected to devServer to use the provided hostname.
     */
    hostname?: string;
    /**
     * Tells clients connected to devServer to use the provided password to authenticate.
     */
    password?: string;
    /**
     * Tells clients connected to devServer to use the provided path to connect.
     */
    pathname?: string;
    /**
     * Tells clients connected to devServer to use the provided port.
     */
    port?: number | string;
    /**
     * Tells clients connected to devServer to use the provided protocol.
     */
    protocol?: string;
    /**
     * Tells clients connected to devServer to use the provided username to authenticate.
     */
    username?: string;
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
    app?: AppClass | string;
    /**
     * Opens specified page in browser.
     */
    target?: string[] | string;
}

export interface AppClass {
    arguments?: string[] | boolean | number | number | { [key: string]: any } | null | string;
    name?:      string[] | string;
}

export interface StaticObject {
    /**
     * Directory for static contents.
     */
    directory?: string;
    /**
     * The static files will be available in the browser under this public path.
     */
    publicPath?: string[] | string;
    /**
     * Tells dev server to use serveIndex middleware when enabled.
     */
    serveIndex?:    boolean | { [key: string]: any };
    staticOptions?: { [key: string]: any };
    /**
     * Watches for files in static content directory.
     */
    watch?: boolean | { [key: string]: any };
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



