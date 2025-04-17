import { ChangeMemberHbPasswordResult } from "./changeMemberHbPasswordResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";
export interface ChangeMemberHbPasswordResponse extends EcaaBaseResponse {
    changeMemberHbPasswordResult: ChangeMemberHbPasswordResult;
    version1: VersionType;
}
