import { AuthorizeSymResult } from "./authorizeSymResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface AuthorizeSymResponse extends EcaaBaseResponse {
    authorizeSymResult: AuthorizeSymResult;
    version1: VersionType;
}