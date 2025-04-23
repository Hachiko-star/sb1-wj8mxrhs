import { FlashcardType } from '../types/types';

export const flashcardData: FlashcardType[] = [
  // Algebra
  {
    id: 1,
    category: 'algebra',
    question: 'What is the quadratic formula?',
    answer: 'x = (-b ± √(b² - 4ac)) / 2a where ax² + bx + c = 0'
  },
  {
    id: 2,
    category: 'algebra',
    question: 'What does FOIL stand for in algebra?',
    answer: 'First, Outer, Inner, Last - a method for multiplying two binomials'
  },
  {
    id: 3,
    category: 'algebra',
    question: 'What is the difference between an expression and an equation?',
    answer: 'An expression is a mathematical phrase with numbers and operations (like 2x + 3). An equation states that two expressions are equal (like 2x + 3 = 7).'
  },
  {
    id: 4,
    category: 'algebra',
    question: 'What are the types of solutions for a system of linear equations?',
    answer: 'A system of linear equations can have: 1) One unique solution, 2) Infinitely many solutions, or 3) No solution'
  },
  
  // Geometry
  {
    id: 5,
    category: 'geometry',
    question: 'What is the Pythagorean theorem?',
    answer: 'In a right triangle, the square of the length of the hypotenuse equals the sum of the squares of the lengths of the other two sides: a² + b² = c²'
  },
  {
    id: 6,
    category: 'geometry',
    question: 'What is the formula for the area of a circle?',
    answer: 'A = πr², where r is the radius of the circle'
  },
  {
    id: 7,
    category: 'geometry',
    question: 'What is the sum of the interior angles of a polygon with n sides?',
    answer: '(n - 2) × 180°'
  },
  {
    id: 8,
    category: 'geometry',
    question: 'What are similar triangles?',
    answer: 'Similar triangles have the same shape but possibly different sizes. Their corresponding angles are equal, and their corresponding sides are proportional.'
  },
  
  // Calculus
  {
    id: 9,
    category: 'calculus',
    question: 'What is the derivative of sin(x)?',
    answer: 'cos(x)'
  },
  {
    id: 10,
    category: 'calculus',
    question: 'What is the chain rule in calculus?',
    answer: 'If y = f(g(x)), then dy/dx = (df/dg) × (dg/dx)'
  },
  {
    id: 11,
    category: 'calculus',
    question: 'What is an inflection point?',
    answer: 'An inflection point is where the curve changes concavity (from concave up to concave down, or vice versa). Mathematically, it\'s where the second derivative changes sign.'
  },
  {
    id: 12,
    category: 'calculus',
    question: 'What does the fundamental theorem of calculus establish?',
    answer: 'It establishes the relationship between differentiation and integration as inverse operations, connecting the concept of the derivative to the concept of the integral.'
  },
  
  // Statistics
  {
    id: 13,
    category: 'statistics',
    question: 'What is the difference between mean, median, and mode?',
    answer: 'Mean is the average of all values, median is the middle value when arranged in order, and mode is the most frequently occurring value.'
  },
  {
    id: 14,
    category: 'statistics',
    question: 'What is standard deviation?',
    answer: 'A measure of how spread out numbers are from their average (mean). It\'s calculated as the square root of variance.'
  },
  {
    id: 15,
    category: 'statistics',
    question: 'What is a normal distribution?',
    answer: 'A bell-shaped probability distribution that is symmetric about the mean, showing that data near the mean are more frequent than data far from the mean.'
  },
  {
    id: 16,
    category: 'statistics',
    question: 'What is the difference between correlation and causation?',
    answer: 'Correlation indicates a relationship between variables, but doesn\'t imply one causes the other. Causation specifically means that one variable directly affects the other.'
  }
];