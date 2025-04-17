import { HomeBankingCredentials } from "./homeBankingCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface ChangeMemberHbPasswordRequest extends EcaaBaseRequest {
    credentials: HomeBankingCredentials;
    newPassword: string;
    version1: VersionType;
}