import { WireBeneficiaryFiInfo } from "./wireBeneficiaryFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryFiInfoSelectFieldsResponse {
    wireBeneficiaryFiInfo: WireBeneficiaryFiInfo;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
