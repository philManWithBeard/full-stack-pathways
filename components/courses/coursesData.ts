export const images = [
  {
    id: '01',
    src: '/../public/pablo-1030.webp',
    alt: 'Awesome watch',
  },
  {
    id: '02',
    src: '/../public/pablo-1030.webp',
    alt: 'Awesome watch',
  },
  {
    id: '03',
    src: '/../public/pablo-1030.webp',
    alt: 'Awesome watch',
  },
  {
    id: '04',
    src: '/../public/pablo-1030.webp',
    alt: 'Awesome watch',
  },
]

export const courses = [
  {
    id: '1',
    name: 'UX Design in Figma',
    currency: 'GBP',
    price: 19,
    priceWithInterview: 99,
    priceWithInterviewAndMentor: 199,
    flag: 'new',
    imageUrl:
    '/../public/pablo-1030.webp',
    rating: 4,
    ratingCount: "hard",
    description:
      'Learn how to increase the reliability of your front end development whilst using one of the most popular React UI frameworks',
    images,
  },
  {
    id: '2',
    name: 'HTML and CSS',
    currency: 'GBP',
    price: 19,
    priceWithInterview: 99,
    priceWithInterviewAndMentor: 199,
    flag: 'on-sale',
    imageUrl:
      '/../public/pablo-1030.webp',
    rating: 3,
    ratingCount: "hard",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '3',
    name: 'Javascript Fundamentals',
    currency: 'GBP',
    price: 19,
    priceWithInterview: 99,
    priceWithInterviewAndMentor: 199,
    imageUrl:
      '/../public/pablo-1030.webp',
    rating: 1,
    ratingCount: "beginner",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '4',
    name: 'Docker, Github and Heroku',
    currency: 'GBP',
    price: 199,
    imageUrl:
      '/../public/pablo-1030.webp',
    rating: 5,
    ratingCount: "Advanced",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '5',
    name: 'React and NextJS',
    currency: 'GBP',
    price: 199,
    imageUrl:
      '/../public/pablo-1030.webp',
    rating: 5,
    ratingCount: "Advanced",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '6',
    name: 'Java Spring',
    currency: 'GBP',
    price: 199,
    imageUrl:
      '/../public/pablo-1030.webp',
    rating: 5,
    ratingCount: "Advanced",
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Course = ElementType<typeof courses>
export type CourseImage = ElementType<typeof images>