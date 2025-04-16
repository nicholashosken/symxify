import { ItcInstallation } from "./itcInstallation";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ItcInstallationSearchPagedSelectFieldsResponse {
    itcInstallation: ItcInstallation[];
    itcInstallationSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
