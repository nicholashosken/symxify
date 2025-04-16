import { Irs } from "./irs";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface IrsSelectFieldsFilterChildrenResponse {
    irs: Irs;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
