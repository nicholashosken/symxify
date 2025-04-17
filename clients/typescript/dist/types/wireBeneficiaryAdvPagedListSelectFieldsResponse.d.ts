import { WireBeneficiaryAdv } from "./wireBeneficiaryAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryAdvPagedListSelectFieldsResponse {
    wireBeneficiaryAdv: WireBeneficiaryAdv[];
    wireBeneficiaryAdvSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
