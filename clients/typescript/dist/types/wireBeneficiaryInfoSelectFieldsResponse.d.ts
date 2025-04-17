import { WireBeneficiaryInfo } from "./wireBeneficiaryInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryInfoSelectFieldsResponse {
    wireBeneficiaryInfo: WireBeneficiaryInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
