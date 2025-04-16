import { TellerTranValidateAfter_2 } from "./tellerTranValidateAfter_2";
import { TellerTranValidateAt_2 } from "./tellerTranValidateAt_2";
import { TellerTranValidateBefore_2 } from "./tellerTranValidateBefore_2";
import { TellerTranValidateHelpCode_2 } from "./tellerTranValidateHelpCode_2";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerTranValidate_2 {
    after: TellerTranValidateAfter_2[];
    afterSpecified: boolean;
    at: TellerTranValidateAt_2[];
    atSpecified: boolean;
    before: TellerTranValidateBefore_2[];
    beforeSpecified: boolean;
    helpCode: TellerTranValidateHelpCode_2[];
    helpCodeSpecified: boolean;
    tableDepthValue: number;
    tableDepthValueSpecified: boolean;
    tableDepth: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
