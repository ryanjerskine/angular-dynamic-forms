import { IOption } from './ioption';

export interface IQuestion {
  /**
   * Type of control (textbox, dropdown, etc).
   */
  controlType: string;
  /**
   * Optional more specific type (type="email", type="number", etc.).
   */
  type: string | null;
  /**
   * Value of the question.
   */
  value: string | number;
  /**
   * Key or property name (firstName, lastName, emailAddress, etc.).
   */
  key: string;
  /**
   * Label for the field.
   */
  label: string;
  /**
   * Optional options for fields with select/dropdown functionality.
   */
  options: IOption[] | null;
  /**
   * Optional validators to apply.
   */
  validators: string[] | null;
}
