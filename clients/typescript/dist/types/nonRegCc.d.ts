import { BitMap } from "./bitMap";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NonRegCc {
    aggregateExceptionValue: number;
    aggregateExceptionValueSpecified: boolean;
    aggregateException: number | null;
    exceptionHoldDaysValue: number;
    exceptionHoldDaysValueSpecified: boolean;
    exceptionHoldDays: number | null;
    exceptionWarnings: BitMap;
    holdDaysValue: number;
    holdDaysValueSpecified: boolean;
    holdDays: number | null;
    holdOvrWarnings: BitMap;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
