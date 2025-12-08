export type RuleFunction = (value: string) => string | null;

export interface IFieldChain {
  string(): IFieldChain;
  min(errorMessage: string): IFieldChain;
  max(errorMessage: string): IFieldChain;
}

export interface IFormValidator {
  field(fieldName: string): IFieldChain;

  validate(): void;
}

export type FormFactory = (formElement: HTMLFormElement) => IFormValidator;
