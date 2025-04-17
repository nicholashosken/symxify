import { ExecutionHeader } from "./executionHeader";
import { ExecutionReturnArrayResponseBody } from "./executionReturnArrayResponseBody";
import { VersionType } from "./versionType";
export interface PowerOnExecutionReturnArrayResponse {
    header: ExecutionHeader;
    body: ExecutionReturnArrayResponseBody;
    version1: VersionType;
}
