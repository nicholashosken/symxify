import { AcctTrackingTypeField } from "./acctTrackingTypeField";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface AcctTrackingType {
    description: string;
    field: AcctTrackingTypeField[];
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