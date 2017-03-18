export class Registration {
  _id: string;
  firstName: string;
  lastName: string;
  contactEmail: string;
  programOfInterest: string;
  request: string;
  requestDate: Date;

  constructor(id: string,
              firstName: string,
              lastName: string,
              contactEmail: string,
              programOfInterest: string,
              request: string,
              requestDate: Date) {
    this._id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.contactEmail = contactEmail;
    this.programOfInterest = programOfInterest;
    this.request = request;
    this.requestDate = requestDate;
  }
}
