import { EscrowAnalysisFields } from "./escrowAnalysisFields";
import { VersionType } from "./versionType";

export interface EscrowAnalysisSelectableFields {
    includeAllEscrowAnalysisFields: boolean | null;
    escrowAnalysisFields: EscrowAnalysisFields;
    version1: VersionType;
}