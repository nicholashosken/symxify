import { Warnings } from "./warnings";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WarningsSelectFieldsResponse {
    warnings: Warnings;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
