import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryInfoSearchPagedSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo[];
    wireBeneficiaryInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
