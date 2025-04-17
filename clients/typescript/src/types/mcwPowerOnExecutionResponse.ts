import { McwExecutionHeader } from "./mcwExecutionHeader";
import { McwExecutionResponseBody } from "./mcwExecutionResponseBody";
import { VersionType } from "./versionType";

export interface McwPowerOnExecutionResponse {
    header: McwExecutionHeader;
    body: McwExecutionResponseBody;
    version1: VersionType;
}