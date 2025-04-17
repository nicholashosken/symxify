import { WireBeneficiaryFiAdv } from "./wireBeneficiaryFiAdv";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiAdvPagedListSelectFieldsResponse {
    wireBeneficiaryFiAdv: WireBeneficiaryFiAdv[];
    wireBeneficiaryFiAdvSpecified: boolean;
    token: string;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}