import { WireBeneficiaryFiAdvFields } from "./wireBeneficiaryFiAdvFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiAdvSelectableFields {
    includeAllWireBeneficiaryFiAdvFieldsValue: boolean;
    includeAllWireBeneficiaryFiAdvFieldsValueSpecified: boolean;
    includeAllWireBeneficiaryFiAdvFields: boolean | null;
    wireBeneficiaryFiAdvFields: WireBeneficiaryFiAdvFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}