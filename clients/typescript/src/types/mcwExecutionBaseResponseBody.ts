import { McwUserDefinedParameters } from "./mcwUserDefinedParameters";
import { McwExecutionBaseResponseBodyMcwDataType } from "./mcwExecutionBaseResponseBodyMcwDataType";
import { McwDataParameters } from "./mcwDataParameters";

export interface McwExecutionBaseResponseBody {
    userDefinedParameters: McwUserDefinedParameters;
    statusCodeValue: number;
    statusCodeValueSpecified: boolean;
    statusCode: number | null;
    statusMessage: string;
    mcwDataTypeValue: McwExecutionBaseResponseBodyMcwDataType;
    mcwDataTypeValueSpecified: boolean;
    mcwDataType: McwExecutionBaseResponseBodyMcwDataType | null;
    dataParameters: McwDataParameters;
}