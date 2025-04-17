import { WireDrawdownDebitAcctAdvText } from "./wireDrawdownDebitAcctAdvText";
import { VersionType } from "./versionType";

export interface WireDrawdownDebitAcctAdv {
    locator: number | null;
    text: WireDrawdownDebitAcctAdvText[];
    version1: VersionType;
}