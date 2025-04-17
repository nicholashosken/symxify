import { McwUserDefinedParameters } from "./mcwUserDefinedParameters";
import { McwExecutionBaseResponseBodyMcwDataType } from "./mcwExecutionBaseResponseBodyMcwDataType";
import { McwDataParameters } from "./mcwDataParameters";

export interface McwExecutionBaseResponseBody {
    userDefinedParameters: McwUserDefinedParameters;
    statusCode: number | null;
    statusMessage: string;
    mcwDataType: McwExecutionBaseResponseBodyMcwDataType | null;
    dataParameters: McwDataParameters;
}