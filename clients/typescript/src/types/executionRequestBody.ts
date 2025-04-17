import { UserDefinedParameters } from "./userDefinedParameters";
import { PromptResponse } from "./promptResponse";
import { VersionType } from "./versionType";

export interface ExecutionRequestBody {
    file: string;
    rgSession: number | null;
    userDefinedParameters: UserDefinedParameters;
    promptResponse: PromptResponse;
    user: number | null;
    version1: VersionType;
}