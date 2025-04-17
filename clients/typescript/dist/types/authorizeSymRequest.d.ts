import { UserNumberCredentials } from "./userNumberCredentials";
import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface AuthorizeSymRequest extends EcaaBaseRequest {
    credentials: UserNumberCredentials;
    namespace: string;
    version1: VersionType;
}
