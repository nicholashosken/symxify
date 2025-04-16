import { TellerTranValidate } from "./tellerTranValidate";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";
export interface TellerTranValidateSelectFieldsResponse {
    tellerTranValidate: TellerTranValidate;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
    messageId: string;
}
