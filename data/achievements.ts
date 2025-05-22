export interface Achievement {
  id: number
  title: string
  description: string
  year: number
  organization: string
  tags: string[]
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: '1Million Prompters Course Completion',
    description: 'Completed the 1Million Prompters course offered by Dubai Future Foundation and Dubai Center for Artificial Intelligence in 2024.',
    year: 2024,
    organization: 'Dubai Future Foundation & Dubai Center for Artificial Intelligence',
    tags: ['AI', 'Prompt Engineering', 'Training', 'Innovation', 'Future Technologies']
  },
  {
    id: 2,
    title: 'Active Participation and 3rd Place Award',
    description: 'Achieved third place with active participation in the Medina Region Exhibition of the National Olympiad for Scientific Creativity, organized by the Saudi Ministry of Education and Mawhiba Center in 2022.',
    year: 2022,
    organization: 'Saudi Ministry of Education and Mawhiba Center',
    tags: ['Scientific Creativity', 'Olympiad', '3rd Place', 'Active Participation', 'Education']
  },
  {
    id: 3,
    title: 'Arduino Course Presentation and Explanation',
    description: 'Delivered a 6-hour Arduino course presentation during the Gulf Talent and Creativity Day, organized by the Royal Commission Yanbu in 2021.',
    year: 2021,
    organization: 'Royal Commission Yanbu',
    tags: ['Arduino', 'Course Presentation', 'Training', 'Gulf Talent and Creativity Day']
  },
  {
    id: 4,
    title: 'Website Design Course Completion',
    description: 'Completed a 24-hour training course in website design from the Center of Talent and Creativity.',
    year: 2019,
    organization: 'Center of Talent and Creativity',
    tags: ['Website Design', 'Training', 'Creativity', 'Talent']
  },
  {
    id: 5,
    title: '3D Design Course Completion',
    description: 'Completed a 24-hour training course in 3D design from the Center of Talent and Creativity.',
    year: 2018,
    organization: 'Center of Talent and Creativity',
    tags: ['3D Design', 'Training', 'Creativity', 'Talent']
  },
  {
    id: 6,
    title: 'Arduino Course Completion',
    description: 'Completed a 30-hour training course in Arduino from the Center of Talent and Creativity.',
    year: 2017,
    organization: 'Center of Talent and Creativity',
    tags: ['Arduino', 'Training', 'Creativity', 'Talent']
  }
] 