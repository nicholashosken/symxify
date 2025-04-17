import { VersionType } from "./versionType";
import { McwExecutionBaseResponseBody } from "./mcwExecutionBaseResponseBody";
export interface McwExecutionResponseBody extends McwExecutionBaseResponseBody {
    rgLine: string;
    version1: VersionType;
}
