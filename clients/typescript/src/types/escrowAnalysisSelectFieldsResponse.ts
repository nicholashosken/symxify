import { EscrowAnalysis } from "./escrowAnalysis";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface EscrowAnalysisSelectFieldsResponse {
    escrowAnalysis: EscrowAnalysis;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}