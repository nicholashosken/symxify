import { InitKerberosAuthenticationResult } from "./initKerberosAuthenticationResult";
import { VersionType } from "./versionType";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface InitKerberosAuthenticationResponse extends EcaaBaseResponse {
    initKerberosAuthenticationHostResult: InitKerberosAuthenticationResult;
    version1: VersionType;
}