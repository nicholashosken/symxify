import type { APIResponseError } from "./types/APIResponseError";
import type { OperationMap } from "./generated/operation-map";
export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: APIResponseError;
}
interface SymxifyClientInitOptions {
    symxifyUrl: string;
    symxifyKey?: string;
}
type OperationName = keyof OperationMap;
export declare class SymxifyClient {
    private symxifyUrl;
    private symxifyKey;
    constructor({ symxifyUrl: baseUrl, symxifyKey: symxifyKey }: SymxifyClientInitOptions);
    private fetch;
    request(options?: RequestInit): { [K in OperationName]: (payload: OperationMap[K]["request"]) => Promise<APIResponse<OperationMap[K]["response"]>>; };
}
export declare function createSymxifyClient(initOptions: SymxifyClientInitOptions): () => SymxifyClient;
export declare function useSymxifyClient(): SymxifyClient;
export {};
