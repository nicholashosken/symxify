import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryInfoPagedListSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
    wireBeneficiaryInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
