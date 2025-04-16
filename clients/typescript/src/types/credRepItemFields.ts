import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface CredRepItemFields {
    amount: number[];
    amountSpecified: boolean;
    ch1: number[];
    ch1Specified: boolean;
    ch10: number[];
    ch10Specified: boolean;
    ch15: number[];
    ch15Specified: boolean;
    ch2: number[];
    ch2Specified: boolean;
    ch26: number[];
    ch26Specified: boolean;
    ch4: number[];
    ch4Specified: boolean;
    chLong: number[];
    chLongSpecified: boolean;
    code: number[];
    codeSpecified: boolean;
    date: number[];
    dateSpecified: boolean;
    segExtendedValue: boolean;
    segExtendedValueSpecified: boolean;
    segExtended: boolean | null;
    segmentTypeValue: boolean;
    segmentTypeValueSpecified: boolean;
    segmentType: boolean | null;
    subsegmentTypeValue: boolean;
    subsegmentTypeValueSpecified: boolean;
    subsegmentType: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}