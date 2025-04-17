import { WireBeneficiaryFiAdv } from "./wireBeneficiaryFiAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiAdvSelectFieldsResponse {
    wireBeneficiaryFiAdv: WireBeneficiaryFiAdv;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}