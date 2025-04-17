import { InitKerberosAuthenticationResult } from "./initKerberosAuthenticationResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface InitKerberosAuthenticationResponse extends EcaaBaseResponse {
    initKerberosAuthenticationHostResult: InitKerberosAuthenticationResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}