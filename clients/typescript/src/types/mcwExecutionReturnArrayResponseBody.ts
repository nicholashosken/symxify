import { RgLine } from "./rgLine";
import { VersionType } from "./versionType";
import { McwExecutionBaseResponseBody } from "./mcwExecutionBaseResponseBody";

export interface McwExecutionReturnArrayResponseBody extends McwExecutionBaseResponseBody {
    rgLine: RgLine[];
    version1: VersionType;
}