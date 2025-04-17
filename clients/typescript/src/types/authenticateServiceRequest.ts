import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface AuthenticateServiceRequest extends EcaaBaseRequest {
    version1: VersionType;
}