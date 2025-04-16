import { AcctTrackingTypeField_2 } from "./acctTrackingTypeField_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTrackingType_2 {
    description: string;
    field: AcctTrackingTypeField_2[];
    fieldSpecified: boolean;
    parentClosingOptionValue: boolean;
    parentClosingOptionValueSpecified: boolean;
    parentClosingOption: boolean | null;
    recordSelectionValue: number;
    recordSelectionValueSpecified: boolean;
    recordSelection: number | null;
    trackingTypeValue: number;
    trackingTypeValueSpecified: boolean;
    trackingType: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
