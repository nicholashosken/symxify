import { GlTableAmount } from "./glTableAmount";
import { GlTableGlAccount } from "./glTableGlAccount";
import { GlTableNegative } from "./glTableNegative";
import { GlTablePercent } from "./glTablePercent";
import { VersionType } from "./versionType";
export interface GlTable {
    amount: GlTableAmount[];
    description: string;
    glAccount: GlTableGlAccount[];
    glTableType: number | null;
    negative: GlTableNegative[];
    percent: GlTablePercent[];
    usageCode: number | null;
    version1: VersionType;
}
