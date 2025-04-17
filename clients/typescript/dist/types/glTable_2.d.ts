import { GlTableAmount_2 } from "./glTableAmount_2";
import { GlTableGlAccount_2 } from "./glTableGlAccount_2";
import { GlTableNegative_2 } from "./glTableNegative_2";
import { GlTablePercent_2 } from "./glTablePercent_2";
import { VersionType } from "./versionType";
export interface GlTable_2 {
    amount: GlTableAmount_2[];
    description: string;
    glAccount: GlTableGlAccount_2[];
    glTableType: number | null;
    negative: GlTableNegative_2[];
    percent: GlTablePercent_2[];
    usageCode: number | null;
    version1: VersionType;
}
