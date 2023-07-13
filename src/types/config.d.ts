export interface Config {
  configVersion: string;
  name: string;
  description: string;
  avatar: string;
  background: {
    showBackground: boolean;
    blur: boolean;
    darken: {
      enabled: boolean;
      amount: number;
    };
    backgroundImage: string;
  };
  theme: string;
  infoCard: {
    transparency: number;
  };
  discord: {
    id: string;
  };
  options: {
    showSourceLink: boolean;
  };
  metadata: {
    title: string;
    description: string;
    themeColor: string;
    authors: {
      name: string;
      url: string;
    }[];
  };
  links: {
    title: string;
    url: string;
    icon: string;
    color:
      | {
          normal: string;
        }
      | string;
  }[];
  socialLinks: {
    icon: string;
    color: string;
    url: string;
  }[];
}

// Parse the YAML content and convert it to the defined type
declare module "*.yml" {
  const content: any;
  export default content;
}
