import { EscrowAnalysis } from "./escrowAnalysis";
import { VersionType } from "./versionType";

export interface EscrowAnalysisSelectFieldsResponse {
    escrowAnalysis: EscrowAnalysis;
    version1: VersionType;
    messageId: string;
}