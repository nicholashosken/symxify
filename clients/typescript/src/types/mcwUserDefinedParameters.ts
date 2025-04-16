import { UserNum } from "./userNum";
import { UserChr } from "./userChr";
import { UserDate } from "./userDate";
import { UserRate } from "./userRate";
import { UserCode } from "./userCode";
import { UserAmount } from "./userAmount";
import { UserFloat } from "./userFloat";
import { VersionType } from "./versionType";
import { XmlElement } from "./xmlElement";

export interface McwUserDefinedParameters {
    mcwUserNumber: UserNum[];
    mcwUserNumberSpecified: boolean;
    mcwUserChr: UserChr[];
    mcwUserChrSpecified: boolean;
    mcwUserDate: UserDate[];
    mcwUserDateSpecified: boolean;
    mcwUserRate: UserRate[];
    mcwUserRateSpecified: boolean;
    mcwUserCode: UserCode[];
    mcwUserCodeSpecified: boolean;
    mcwUserAmount: UserAmount[];
    mcwUserAmountSpecified: boolean;
    mcwUserFloat: UserFloat[];
    mcwUserFloatSpecified: boolean;
    version1: VersionType;
    any: XmlElement[];
    anySpecified: boolean;
}