import { EscrowAnalysisFields } from "./escrowAnalysisFields";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface EscrowAnalysisSingleSelectableFields {
    includeAllEscrowAnalysisFieldsValue: boolean;
    includeAllEscrowAnalysisFieldsValueSpecified: boolean;
    includeAllEscrowAnalysisFields: boolean | null;
    escrowAnalysisFields: EscrowAnalysisFields;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
