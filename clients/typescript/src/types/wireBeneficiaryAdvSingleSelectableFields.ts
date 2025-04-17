import { WireBeneficiaryAdvFields } from "./wireBeneficiaryAdvFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface WireBeneficiaryAdvSingleSelectableFields {
    includeAllWireBeneficiaryAdvFieldsValue: boolean;
    includeAllWireBeneficiaryAdvFieldsValueSpecified: boolean;
    includeAllWireBeneficiaryAdvFields: boolean | null;
    wireBeneficiaryAdvFields: WireBeneficiaryAdvFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}