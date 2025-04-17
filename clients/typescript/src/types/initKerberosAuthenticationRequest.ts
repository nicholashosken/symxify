import { VersionType } from "./versionType";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface InitKerberosAuthenticationRequest extends EcaaBaseRequest {
    domain: string;
    version1: VersionType;
}