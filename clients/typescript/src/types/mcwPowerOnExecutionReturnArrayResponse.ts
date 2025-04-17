import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionReturnArrayResponseBody } from "./mcwExecutionReturnArrayResponseBody";
import { VersionType } from "./versionType";

export interface McwPowerOnExecutionReturnArrayResponse {
    header: McwExecutionHeader;
    body: McwExecutionReturnArrayResponseBody;
    version1: VersionType;
}