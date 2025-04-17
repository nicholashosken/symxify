import { UserNum } from "./userNum";
import { UserChr } from "./userChr";
import { UserDate } from "./userDate";
import { UserRate } from "./userRate";
import { UserCode } from "./userCode";
import { UserAmount } from "./userAmount";
import { UserFloat } from "./userFloat";
import { VersionType } from "./versionType";

export interface McwUserDefinedParameters {
    mcwUserNumber: UserNum[];
    mcwUserChr: UserChr[];
    mcwUserDate: UserDate[];
    mcwUserRate: UserRate[];
    mcwUserCode: UserCode[];
    mcwUserAmount: UserAmount[];
    mcwUserFloat: UserFloat[];
    version1: VersionType;
}