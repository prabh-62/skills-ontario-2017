export class SkillsAdmin {
  _id: string;
  loginName: string;
  loginPassword: string;

  constructor(id: string,
              loginName: string,
              loginPassword: string) {
    this._id = id;
    this.loginName = loginName;
    this.loginPassword = loginPassword;
  }
}
