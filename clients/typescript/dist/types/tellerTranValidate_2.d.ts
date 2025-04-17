import { TellerTranValidateAfter_2 } from "./tellerTranValidateAfter_2";
import { TellerTranValidateAt_2 } from "./tellerTranValidateAt_2";
import { TellerTranValidateBefore_2 } from "./tellerTranValidateBefore_2";
import { TellerTranValidateHelpCode_2 } from "./tellerTranValidateHelpCode_2";
import { VersionType } from "./versionType";
export interface TellerTranValidate_2 {
    after: TellerTranValidateAfter_2[];
    at: TellerTranValidateAt_2[];
    before: TellerTranValidateBefore_2[];
    helpCode: TellerTranValidateHelpCode_2[];
    tableDepth: number | null;
    version1: VersionType;
}
