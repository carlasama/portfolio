export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
  isLoading?: boolean;
}

export interface ContactProps {
  onBack: () => void;
}

export interface SocialMediaProps {
  platform: string;
  username: string;
  url: string;
  icon: string;
}

export interface ContactInfoProps {
  email: string;
  phone?: string;
  location: string;
  socialMedia: SocialMediaProps[];
} 