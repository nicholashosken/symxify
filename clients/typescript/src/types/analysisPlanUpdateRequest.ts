import { AnalysisPlanFields_2 } from "./analysisPlanFields_2";

export interface AnalysisPlanUpdateRequest {
    analysisPlanIndexAnalysisPlanValue: number;
    analysisPlanIndexAnalysisPlanValueSpecified: boolean;
    analysisPlanIndexAnalysisPlan: number | null;
    analysisPlanFields: AnalysisPlanFields_2;
}