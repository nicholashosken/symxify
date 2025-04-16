import { Warnings } from "./warnings";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WarningsPagedListSelectFieldsResponse {
    warnings: Warnings[];
    warningsSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
