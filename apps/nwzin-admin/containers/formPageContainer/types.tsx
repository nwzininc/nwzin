export interface FormPageContainerProps {
    id?: string;
    currentForm?: FormState;
};


export interface ComponentConfigurations {
    settings: Record<string, any>;
    validations: Record<string, any>;
    dataMapping: Record<string, any>;
  }
  
  export interface PageItem {
    id: string; // uniqueId
    parentId: string; // unique Parent Id
    componentType: 'FORM_FIELD' | 'LAYOUT' | 'NON_FORM_FIELD';
    componentId: string; //Generic Component Id
    configurations: ComponentConfigurations;
    childNodes: string[];
  }
  
  export interface FormSchema {
    pageItems: Record<'ROOT' | string, PageItem>;
    pageId: string;
    pageName: string;
  }
  
  export interface Form {
    pages: FormSchema[];
    isPublished: boolean;
    groups: string[];
    assignedTo: string[];
    isPublic: boolean;
    isAcceptingResponse: boolean;
    lastDateToAccceptResponse?: number;
    startedOn?: number;
  }
  export interface  ColorScale {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  } 
  
  export interface FormTheme {
    isUpdated: boolean;
    primaryColor: ColorScale;
    backgroundColor: ColorScale;
  }
  
  export interface FormState {
    form: Form;
    theme: FormTheme;
  }

  export type Mode = "Desktop" | "Mobile";