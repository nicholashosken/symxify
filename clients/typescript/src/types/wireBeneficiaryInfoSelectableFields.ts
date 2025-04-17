import { WireBeneficiaryInfoFields } from "./wireBeneficiaryInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryInfoSelectableFields {
    includeAllWireBeneficiaryInfoFieldsValue: boolean;
    includeAllWireBeneficiaryInfoFieldsValueSpecified: boolean;
    includeAllWireBeneficiaryInfoFields: boolean | null;
    wireBeneficiaryInfoFields: WireBeneficiaryInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}