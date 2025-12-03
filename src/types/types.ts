export type RuleFunction = (value: string) => string | null;

export interface IFieldChain {
  string(): IFieldChain;
  min(minLength: number, errorMessage?: string): IFieldChain;
  max(maxLength: number, errorMessage?: string): IFieldChain;
}

export interface IFormValidator {
  field(fieldName: string): IFieldChain;

  validate(): ValidationResult;
}

export interface ValidationResult {
  success: boolean;
  errors: Record<string, string | null>;
}

export type FormFactory = (formElement: HTMLFormElement) => IFormValidator;
