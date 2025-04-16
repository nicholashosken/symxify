import { TellerTranValidateAfter } from "./tellerTranValidateAfter";
import { TellerTranValidateAt } from "./tellerTranValidateAt";
import { TellerTranValidateBefore } from "./tellerTranValidateBefore";
import { TellerTranValidateHelpCode } from "./tellerTranValidateHelpCode";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerTranValidate {
    after: TellerTranValidateAfter[];
    afterSpecified: boolean;
    at: TellerTranValidateAt[];
    atSpecified: boolean;
    before: TellerTranValidateBefore[];
    beforeSpecified: boolean;
    helpCode: TellerTranValidateHelpCode[];
    helpCodeSpecified: boolean;
    tableDepthValue: number;
    tableDepthValueSpecified: boolean;
    tableDepth: number | null;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}
