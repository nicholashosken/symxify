import { ErrorCode } from "./errorCode";
import { Result } from "./result";
export interface CommonResult {
    errorCode: ErrorCode | null;
    errorMessage: string;
    result: Result | null;
}
