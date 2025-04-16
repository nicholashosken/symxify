import { CollatrlTrackingTypeUserRate20 } from "./collatrlTrackingTypeUserRate20";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollatrlTrackingType {
    description: string;
    parentClosingOptionValue: boolean;
    parentClosingOptionValueSpecified: boolean;
    parentClosingOption: boolean | null;
    recordSelectionValue: number;
    recordSelectionValueSpecified: boolean;
    recordSelection: number | null;
    trackingTypeValue: number;
    trackingTypeValueSpecified: boolean;
    trackingType: number | null;
    userRate20: CollatrlTrackingTypeUserRate20[];
    userRate20Specified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
