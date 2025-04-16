import { UserDefinedParameters } from "./userDefinedParameters";
import { PromptResponse } from "./promptResponse";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface ExecutionRequestBody {
    file: string;
    rgSessionValue: number;
    rgSessionValueSpecified: boolean;
    rgSession: number | null;
    userDefinedParameters: UserDefinedParameters;
    promptResponse: PromptResponse;
    userValue: number;
    userValueSpecified: boolean;
    user: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
