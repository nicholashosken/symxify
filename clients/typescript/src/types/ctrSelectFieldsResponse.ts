import { Ctr } from "./ctr";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CtrSelectFieldsResponse {
    ctr: Ctr;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}