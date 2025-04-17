import { McwUserDefinedParameters } from "./mcwUserDefinedParameters";
import { VersionType } from "./versionType";
export interface McwExecutionRequestBody {
    file: string;
    inputLetterFile: string;
    mcwSessionNumber: number | null;
    user: number | null;
    userDefinedParameters: McwUserDefinedParameters;
    version1: VersionType;
}
