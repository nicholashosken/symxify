import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface RequiredInputDefaultValue {
    rgDefText: string;
    rgDefRateValue: number;
    rgDefRateValueSpecified: boolean;
    rgDefRate: number | null;
    rgDefDateValue: string;
    rgDefDateValueSpecified: boolean;
    rgDefDate: string | null;
    rgDefNumValue: number;
    rgDefNumValueSpecified: boolean;
    rgDefNum: number | null;
    rgDefAmountValue: number;
    rgDefAmountValueSpecified: boolean;
    rgDefAmount: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}