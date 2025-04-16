import { Institution } from "./institution";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface InstitutionSearchPagedSelectFieldsResponse {
    institution: Institution[];
    institutionSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
