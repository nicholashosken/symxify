import { WireBeneficiaryFiInfo } from "./wireBeneficiaryFiInfo";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface WireBeneficiaryFiInfoPagedListSelectFieldsResponse {
    wireBeneficiaryFiInfo: WireBeneficiaryFiInfo[];
    wireBeneficiaryFiInfoSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
