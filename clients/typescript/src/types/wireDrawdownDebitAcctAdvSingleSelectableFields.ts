import { WireDrawdownDebitAcctAdvFields } from "./wireDrawdownDebitAcctAdvFields";
import { VersionType } from "./versionType";

export interface WireDrawdownDebitAcctAdvSingleSelectableFields {
    includeAllWireDrawdownDebitAcctAdvFields: boolean | null;
    wireDrawdownDebitAcctAdvFields: WireDrawdownDebitAcctAdvFields;
    version1: VersionType;
}