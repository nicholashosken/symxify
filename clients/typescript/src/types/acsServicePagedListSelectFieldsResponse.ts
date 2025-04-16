import { AcsService } from "./acsService";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcsServicePagedListSelectFieldsResponse {
    acsService: AcsService[];
    acsServiceSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}