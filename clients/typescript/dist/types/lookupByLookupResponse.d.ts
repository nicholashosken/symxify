import { LookupResult } from "./lookupResult";
export interface LookupByLookupResponse {
    result: LookupResult;
    accountNumber: string;
    messageId: string;
}
