import { VersionType } from "./versionType";
import { ExecutionBaseResponseBody } from "./executionBaseResponseBody";

export interface ExecutionResponseBody extends ExecutionBaseResponseBody {
    rgLines: string;
    version1: VersionType;
}