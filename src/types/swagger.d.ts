declare module 'swagger-ui-express' {
  import { RequestHandler } from 'express';

  interface SwaggerUiOptions {
    customCss?: string;
    customfavIcon?: string;
    customJs?: string;
    customCssUrl?: string;
    customSiteTitle?: string;
    [key: string]: any;
  }

  export function setup(
    swaggerDoc: any,
    options?: SwaggerUiOptions,
    customOptions?: any,
    customCss?: string,
    customfavIcon?: string,
    swaggerUrl?: string,
    customSiteTitle?: string
  ): RequestHandler;

  export function serve(
    req: any,
    res: any,
    next: any
  ): void;

  export function generateHTML(
    swaggerDoc: any,
    options?: SwaggerUiOptions,
    customOptions?: any,
    customCss?: string,
    customfavIcon?: string,
    swaggerUrl?: string,
    customSiteTitle?: string
  ): string;
}

declare module 'swagger-jsdoc' {
  interface SwaggerDefinition {
    openapi?: string;
    info: {
      title: string;
      version: string;
      description?: string;
      [key: string]: any;
    };
    servers?: Array<{
      url: string;
      description?: string;
    }>;
    [key: string]: any;
  }

  interface Options {
    definition: SwaggerDefinition;
    apis: string[];
  }

  function swaggerJSDoc(options: Options): any;
  export = swaggerJSDoc;
}
