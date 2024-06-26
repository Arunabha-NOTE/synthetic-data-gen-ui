import {HttpContext, HttpHeaders, HttpParams} from "@angular/common/http";

export interface options {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'body';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}
