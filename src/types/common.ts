type CustomIconType = {
  className?: string;
};

type PageProps = {
  params?: Promise<any>;
  searchParams?: Promise<any>;
};

type ContactUsRequestType = {
  email: string;
  name: string;
  comment: string;
};

export type { ContactUsRequestType, CustomIconType, PageProps };
