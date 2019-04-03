import { IOption } from './ioption';
import { IValidator } from './ivalidator';

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
   * Validators to apply.
   */
  validators: IValidator[];

  // TBD
  hidden: boolean; // UI Only?
  showOnlyIfHasValue: string | null;
}
