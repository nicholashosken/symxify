import { HomeBankingCredentials } from "./homeBankingCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface AuthenticateMemberRequest extends EcaaBaseRequest {
    credentials: HomeBankingCredentials;
    version1: VersionType;
}
