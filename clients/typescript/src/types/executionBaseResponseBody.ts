import { Prompt } from "./prompt";
import { UserDefinedParameters } from "./userDefinedParameters";

export interface ExecutionBaseResponseBody {
    promptRequest: Prompt;
    userDefinedParameters: UserDefinedParameters;
    rgScreenClear: boolean | null;
    statusCode: number | null;
    statusMessage: string;
}