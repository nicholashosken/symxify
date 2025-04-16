import { AcsService } from "./acsService";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcsServiceSelectFieldsResponse {
    acsService: AcsService;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}