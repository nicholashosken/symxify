import { GlTableAmount_2 } from "./glTableAmount_2";
import { GlTableGlAccount_2 } from "./glTableGlAccount_2";
import { GlTableNegative_2 } from "./glTableNegative_2";
import { GlTablePercent_2 } from "./glTablePercent_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface GlTable_2 {
    amount: GlTableAmount_2[];
    amountSpecified: boolean;
    description: string;
    glAccount: GlTableGlAccount_2[];
    glAccountSpecified: boolean;
    glTableTypeValue: number;
    glTableTypeValueSpecified: boolean;
    glTableType: number | null;
    negative: GlTableNegative_2[];
    negativeSpecified: boolean;
    percent: GlTablePercent_2[];
    percentSpecified: boolean;
    usageCodeValue: number;
    usageCodeValueSpecified: boolean;
    usageCode: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}