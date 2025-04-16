import { TellerFeeFields } from "./tellerFeeFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerFeeSelectableFields {
    includeAllTellerFeeFieldsValue: boolean;
    includeAllTellerFeeFieldsValueSpecified: boolean;
    includeAllTellerFeeFields: boolean | null;
    tellerFeeFields: TellerFeeFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
