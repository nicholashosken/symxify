import { RgLine } from "./rgLine";
import { VersionType } from "./versionType";
import { ExecutionBaseResponseBody } from "./executionBaseResponseBody";
export interface ExecutionReturnArrayResponseBody extends ExecutionBaseResponseBody {
    rgLine: RgLine[];
    version1: VersionType;
}
