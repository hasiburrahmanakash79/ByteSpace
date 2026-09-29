export type Course = {
  id: string;
  title: string;
  instructor: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  level: string;
  rating: {
    score: number;
    count: number;
  };
  highlights: readonly string[];
  studentsExtra: number;
  price: number;
  period: string;
  categories: readonly string[];
};

export type CategoryTab = {
  id: string;
  label: string;
};

export type LearningPath = {
  id: string;
  label: string;
  icon: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: {
    src: string;
    width: number;
    height: number;
  };
};

export type Partner = {
  id: string;
  name: string;
  logo: string;
  width: number;
  height: number;
};

export type Stat = {
  value: string;
  label: string;
};
