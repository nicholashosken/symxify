import { AdministrativeCredentials } from "./administrativeCredentials";
import { UserNumberCredentials } from "./userNumberCredentials";
import { TokenCredentials } from "./tokenCredentials";
export interface AdminCredentialsChoice {
    administrativeCredentials: AdministrativeCredentials;
    userNumberCredentials: UserNumberCredentials;
    tokenCredentials: TokenCredentials;
    processorUserValue: number;
    processorUserValueSpecified: boolean;
    processorUser: number | null;
}
