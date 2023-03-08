export interface ProjectType {
  live: boolean;
  internal: boolean;
  languages: string[];
  image: StaticImageData;
  title: string;
  urProject: string;
  technologys: string[];
  dictionary: {
    description: string;
  };
}
