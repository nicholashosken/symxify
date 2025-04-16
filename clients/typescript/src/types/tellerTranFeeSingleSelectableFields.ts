import { TellerTranFeeFields } from "./tellerTranFeeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranFeeSingleSelectableFields {
    includeAllTellerTranFeeFieldsValue: boolean;
    includeAllTellerTranFeeFieldsValueSpecified: boolean;
    includeAllTellerTranFeeFields: boolean | null;
    tellerTranFeeFields: TellerTranFeeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}