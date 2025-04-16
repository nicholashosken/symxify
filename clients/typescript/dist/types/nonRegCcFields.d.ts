import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface NonRegCcFields {
    aggregateExceptionValue: boolean;
    aggregateExceptionValueSpecified: boolean;
    aggregateException: boolean | null;
    exceptionHoldDaysValue: boolean;
    exceptionHoldDaysValueSpecified: boolean;
    exceptionHoldDays: boolean | null;
    exceptionWarningsValue: boolean;
    exceptionWarningsValueSpecified: boolean;
    exceptionWarnings: boolean | null;
    holdDaysValue: boolean;
    holdDaysValueSpecified: boolean;
    holdDays: boolean | null;
    holdOvrWarningsValue: boolean;
    holdOvrWarningsValueSpecified: boolean;
    holdOvrWarnings: boolean | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
