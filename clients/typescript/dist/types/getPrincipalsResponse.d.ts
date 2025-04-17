import { GetPrincipalsResult } from "./getPrincipalsResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface GetPrincipalsResponse extends EcaaBaseResponse {
    principalsResult: GetPrincipalsResult;
    version1: VersionType;
}
