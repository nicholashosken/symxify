import { EscrowAnalysisFields } from "./escrowAnalysisFields";
import { VersionType } from "./versionType";
export interface EscrowAnalysisSingleSelectableFields {
    includeAllEscrowAnalysisFields: boolean | null;
    escrowAnalysisFields: EscrowAnalysisFields;
    version1: VersionType;
}
