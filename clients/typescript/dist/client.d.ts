import type { APIResponseError } from "./types/APIResponseError";
import type { OperationMap } from "./generated/operation-map";
export interface APIResponse<T> {
    success: boolean;
    data?: T;
    error?: APIResponseError;
}
interface SymxifyClientInitOptions {
    symxifyUrl: string;
    serviceKey?: string;
    serviceId?: string;
    symxifyType: "Self-hosted" | "Cloud-hosted";
}
type OperationName = keyof OperationMap;
export declare class SymxifyClient {
    private symxifyUrl;
    private connectionKey;
    private connectionId;
    private hostingType;
    constructor({ symxifyUrl: baseUrl, serviceKey: connectionKey, serviceId: connectionId, symxifyType: hostingType }: SymxifyClientInitOptions);
    private fetch;
    request(): { [K in OperationName]: (payload: OperationMap[K]["request"]) => Promise<APIResponse<OperationMap[K]["response"]>>; };
}
export declare function createSymxifyClient(initOptions: SymxifyClientInitOptions): () => SymxifyClient;
export declare function useSymxifyClient(): SymxifyClient;
export {};
