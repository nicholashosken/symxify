import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlTrackingTypeFields {
    descriptionValue: boolean;
    descriptionValueSpecified: boolean;
    description: boolean | null;
    parentClosingOptionValue: boolean;
    parentClosingOptionValueSpecified: boolean;
    parentClosingOption: boolean | null;
    recordSelectionValue: boolean;
    recordSelectionValueSpecified: boolean;
    recordSelection: boolean | null;
    trackingTypeValue: boolean;
    trackingTypeValueSpecified: boolean;
    trackingType: boolean | null;
    userRate20: number[];
    userRate20Specified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}