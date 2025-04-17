import { WireBeneficiaryFiInfoFields } from "./wireBeneficiaryFiInfoFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryFiInfoSelectableFields {
    includeAllWireBeneficiaryFiInfoFieldsValue: boolean;
    includeAllWireBeneficiaryFiInfoFieldsValueSpecified: boolean;
    includeAllWireBeneficiaryFiInfoFields: boolean | null;
    wireBeneficiaryFiInfoFields: WireBeneficiaryFiInfoFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}