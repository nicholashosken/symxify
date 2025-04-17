import { AuthenticateMemberResult } from "./authenticateMemberResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface AuthenticateMemberResponse extends EcaaBaseResponse {
    authenticateMemberResult: AuthenticateMemberResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}