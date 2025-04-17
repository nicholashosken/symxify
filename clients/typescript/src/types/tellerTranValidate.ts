import { TellerTranValidateAfter } from "./tellerTranValidateAfter";
import { TellerTranValidateAt } from "./tellerTranValidateAt";
import { TellerTranValidateBefore } from "./tellerTranValidateBefore";
import { TellerTranValidateHelpCode } from "./tellerTranValidateHelpCode";
import { VersionType } from "./versionType";

export interface TellerTranValidate {
    after: TellerTranValidateAfter[];
    at: TellerTranValidateAt[];
    before: TellerTranValidateBefore[];
    helpCode: TellerTranValidateHelpCode[];
    tableDepth: number | null;
    version1: VersionType;
}