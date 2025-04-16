import { GlTableAmount } from "./glTableAmount";
import { GlTableGlAccount } from "./glTableGlAccount";
import { GlTableNegative } from "./glTableNegative";
import { GlTablePercent } from "./glTablePercent";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface GlTable {
    amount: GlTableAmount[];
    amountSpecified: boolean;
    description: string;
    glAccount: GlTableGlAccount[];
    glAccountSpecified: boolean;
    glTableTypeValue: number;
    glTableTypeValueSpecified: boolean;
    glTableType: number | null;
    negative: GlTableNegative[];
    negativeSpecified: boolean;
    percent: GlTablePercent[];
    percentSpecified: boolean;
    usageCodeValue: number;
    usageCodeValueSpecified: boolean;
    usageCode: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
