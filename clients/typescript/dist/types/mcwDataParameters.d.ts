import { McwNumData } from "./mcwNumData";
import { McwMoneyData } from "./mcwMoneyData";
import { McwChrData } from "./mcwChrData";
import { McwRateData } from "./mcwRateData";
import { McwDateData } from "./mcwDateData";
import { VersionType } from "./versionType";
export interface McwDataParameters {
    mcwNumData: McwNumData[];
    mcwMoneyData: McwMoneyData[];
    mcwChrData: McwChrData[];
    mcwRateData: McwRateData[];
    mcwDateData: McwDateData[];
    version1: VersionType;
}
