import { TellerTranValidateFields } from "./tellerTranValidateFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface TellerTranValidateSelectableFields {
    includeAllTellerTranValidateFieldsValue: boolean;
    includeAllTellerTranValidateFieldsValueSpecified: boolean;
    includeAllTellerTranValidateFields: boolean | null;
    tellerTranValidateFields: TellerTranValidateFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}