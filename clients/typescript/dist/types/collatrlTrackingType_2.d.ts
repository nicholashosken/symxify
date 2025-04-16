import { CollatrlTrackingTypeUserRate20_2 } from "./collatrlTrackingTypeUserRate20_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface CollatrlTrackingType_2 {
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
    userRate20: CollatrlTrackingTypeUserRate20_2[];
    userRate20Specified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
