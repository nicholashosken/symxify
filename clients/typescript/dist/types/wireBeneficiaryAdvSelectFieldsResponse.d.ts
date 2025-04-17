import { WireBeneficiaryAdv } from "./wireBeneficiaryAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryAdvSelectFieldsResponse {
    wireBeneficiaryAdv: WireBeneficiaryAdv;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
