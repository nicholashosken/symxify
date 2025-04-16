import { Institution } from "./institution";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface InstitutionSelectFieldsResponse {
    institution: Institution;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}