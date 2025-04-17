import { AuthenticateResult } from "./authenticateResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface AuthenticateResponse extends EcaaBaseResponse {
    authenticateResult: AuthenticateResult;
    version1: VersionType;
}
