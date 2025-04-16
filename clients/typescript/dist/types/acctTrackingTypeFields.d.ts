import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface AcctTrackingTypeFields {
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    field: number[];
    fieldSpecified: boolean;
    parentClosingOptionValue: boolean;
    parentClosingOptionValueSpecified: boolean;
    parentClosingOption: boolean | null;
    recordSelectionValue: boolean;
    recordSelectionValueSpecified: boolean;
    recordSelection: boolean | null;
    trackingTypeValue: boolean;
    trackingTypeValueSpecified: boolean;
    trackingType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
