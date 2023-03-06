export interface ProjectType {
  live: boolean;
  internal: boolean;
  image: StaticImageData;
  title: string;
  urProject: string;
  technologys: string[];
  dictionary: {
    description: string;
  };
}
