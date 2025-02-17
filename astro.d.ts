
declare namespace astroHTML.JSX {
    interface HTMLAttributes {
      'client:load'?: boolean;
      'client:idle'?: boolean;
      'client:visible'?: boolean;
      'client:only'?: string;
      'is:inline'?: boolean;
    }
  }