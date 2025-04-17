import { ErrorCode } from "./errorCode";
import { Result } from "./result";

export interface CommonResult {
    errorCodeValue: ErrorCode;
    errorCodeValueSpecified: boolean;
    errorCode: ErrorCode | null;
    errorMessage: string;
    resultValue: Result;
    resultValueSpecified: boolean;
    result: Result | null;
}