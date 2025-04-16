import { DivIndexLocal } from "./divIndexLocal";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface DivIndexLocalPagedListSelectFieldsResponse {
    divIndexLocal: DivIndexLocal[];
    divIndexLocalSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}