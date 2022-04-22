/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'vue-composable-useform';

/**
 * @description FormHandler Type
 * @description This function is called when submitting form
 * @param formDatas The datas submitted (any beacause devoloper have to type it)
 */
export type FormHandler = (formData?: any) => void;

export type RegisterInput = (field: string) => { id: string; name: string };

export interface IUseFormState {
  fields: string[];
  formDatas: {
    [key: string]: string;
  };
  formHandler: FormHandler | null;
}
