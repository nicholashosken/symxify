import { VersionType } from "./versionType";

export interface PromptResponse {
    rgAnsText: string;
    rgAnsRate: number | null;
    rgAnsDate: string | null;
    rgAnsNum: number | null;
    rgAnsAmount: number | null;
    version1: VersionType;
}