import { ChangeMemberHbPasswordResult } from "./changeMemberHbPasswordResult";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
import { EcaaBaseResponse } from "./ecaaBaseResponse";

export interface ChangeMemberHbPasswordResponse extends EcaaBaseResponse {
    changeMemberHbPasswordResult: ChangeMemberHbPasswordResult;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}