import { Remittance } from "./remittance";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface RemittanceSelectFieldsResponse {
    remittance: Remittance;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
