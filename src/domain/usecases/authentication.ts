import { AccountModel } from '../models/account-model';

type Authenticationparams = {
  email: string;
  password: string;
}

export interface Authentitacion {
  auth(params: Authenticationparams): Promise<AccountModel>
}