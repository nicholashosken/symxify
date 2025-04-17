import { UserNumberCredentials } from "./userNumberCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface ChangeSymitarPasswordRequest extends EcaaBaseRequest {
    credentials: UserNumberCredentials;
    newPassword: string;
    version1: VersionType;
}
