import { UserNumberCredentials } from "./userNumberCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface GetPrincipalsRequest extends EcaaBaseRequest {
    credentials: UserNumberCredentials;
    namespace: string;
    privilegeDemand: string[];
    principal: string[];
    version1: VersionType;
}