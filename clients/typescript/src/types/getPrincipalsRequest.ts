import { UserNumberCredentials } from "./userNumberCredentials";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseRequest } from "./ecaaBaseRequest";

export interface GetPrincipalsRequest extends EcaaBaseRequest {
    credentials: UserNumberCredentials;
    namespace: string;
    privilegeDemand: string[];
    principal: string[];
    principalSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}