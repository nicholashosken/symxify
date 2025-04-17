import { PromptRgDataType } from "./promptRgDataType";
import { VersionType } from "./versionType";

export interface Prompt {
    rgMaxCodeWidth: number | null;
    rgDataType: PromptRgDataType | null;
    rgPrompt: string;
    version1: VersionType;
}