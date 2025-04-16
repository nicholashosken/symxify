import { Prompt } from "./prompt";
import { UserDefinedParameters } from "./userDefinedParameters";

export interface ExecutionBaseResponseBody {
    promptRequest: Prompt;
    userDefinedParameters: UserDefinedParameters;
    rgScreenClearValue: boolean;
    rgScreenClearValueSpecified: boolean;
    rgScreenClear: boolean | null;
    statusCodeValue: number;
    statusCodeValueSpecified: boolean;
    statusCode: number | null;
    statusMessage: string;
}