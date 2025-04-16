import { ShareAnalysisGroupFields_2 } from "./shareAnalysisGroupFields_2";

export interface ShareAnalysisGroupUpdateRequest {
    shareAnalysisGroupLocatorValue: number;
    shareAnalysisGroupLocatorValueSpecified: boolean;
    shareAnalysisGroupLocator: number | null;
    shareAnalysisGroupFields: ShareAnalysisGroupFields_2;
}