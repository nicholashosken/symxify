import { CommonResult } from "./commonResult";

export interface AuthenticateResult extends CommonResult {
    samlAssertion: string;
    authorizedSym: string[];
}