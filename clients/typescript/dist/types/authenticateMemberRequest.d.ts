import { HomeBankingCredentials } from "./homeBankingCredentials";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";
export interface AuthenticateMemberRequest extends EcaaBaseRequest {
    credentials: HomeBankingCredentials;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
