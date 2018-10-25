export class PersonalInformation {
  constructor (
    readonly firstName: string,
    readonly lastName: string,
    readonly sex: string,
    readonly experience: number,
    readonly profession: string[],
    readonly tools: string[],
    readonly continent: string,
    readonly commands: string[]
  ) { }
}
