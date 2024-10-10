let namebar=document.getElementById("namebar")
let category=document.getElementById("category")
let questionstype=document.getElementById("questionstype")
let submitbtn=document.getElementById("submitbtn")
let infocontainer=document.querySelectorAll("#infocontainer")
let quizcontainer=document.getElementById("quizcontainer")
let resultbox=document.querySelectorAll(".resultbox")
let totalscore=document.getElementById("totalscore")
let displayname=document.getElementById("displayname")
let correctscore=document.getElementById("correctscore")
let wrongscore=document.getElementById("wrongscore")
let totalquestions=document.getElementById("totalquestions")
let percentage=document.getElementById("percentage")
let selectedquestion=document.getElementById("selectedquestion")
let playagain=document.getElementById("playagain")
let heading=document.getElementById("heading")
 heading.innerHTML='Quiz Settings... '

 //for quiz questions and answers

 let question=document.getElementById("question")
 let answers=document.getElementById("answers")
 let submitanswer=document.getElementById("submitanswer")
let qindex=0;
let correctanswercount=0;
let wronganswercount=0;
let wronganswerscount=0;
let totalscores=0;
let percentage_result=0;


//for mathquiz
const mathquizdata = [
    {
      id: 1,
      question: 'What is the value of π (pi) rounded to 2 decimal places?',
      answers: [
        { answer: '3.14', iscorrect: true },
        { answer: '3.24', iscorrect: false },
        { answer: '3.12', iscorrect: false },
        { answer: '3.04', iscorrect: false },
      ],
    },
    {
      id: 2,
      question: 'What is the square root of 81?',
      answers: [
        { answer: '7', iscorrect: false },
        { answer: '9', iscorrect: true },
        { answer: '6', iscorrect: false },
        { answer: '8', iscorrect: false },
      ],
    },
    {
      id: 3,
      question: 'Which of the following is a prime number?',
      answers: [
        { answer: '12', iscorrect: false },
        { answer: '18', iscorrect: false },
        { answer: '19', iscorrect: true },
        { answer: '20', iscorrect: false },
      ],
    },
    {
      id: 4,
      question: 'What is 12 multiplied by 8?',
      answers: [
        { answer: '96', iscorrect: true },
        { answer: '84', iscorrect: false },
        { answer: '90', iscorrect: false },
        { answer: '104', iscorrect: false },
      ],
    },
    {
      id: 5,
      question: 'What is the solution to the equation 5x = 25?',
      answers: [
        { answer: '4', iscorrect: false },
        { answer: '6', iscorrect: false },
        { answer: '7', iscorrect: false },
        { answer: '5', iscorrect: true },
      ],
    },
    {
      id: 6,
      question: 'What is the value of 2^5?',
      answers: [
        { answer: '16', iscorrect: false },
        { answer: '25', iscorrect: false },
        { answer: '32', iscorrect: true },
        { answer: '64', iscorrect: false },
      ],
    },
    {
      id: 7,
      question: 'Which of the following is an irrational number?',
      answers: [
        { answer: '√2', iscorrect: true },
        { answer: '4/2', iscorrect: false },
        { answer: '3.5', iscorrect: false },
        { answer: '0.25', iscorrect: false },
      ],
    },
    {
      id: 8,
      question: 'If a triangle has angles 60°, 60°, and 60°, what type of triangle is it?',
      answers: [
        { answer: 'Isosceles', iscorrect: false },
        { answer: 'Scalene', iscorrect: false },
        { answer: 'Equilateral', iscorrect: true },
        { answer: 'Right-angled', iscorrect: false },
      ],
    },
    {
      id: 9,
      question: 'What is the area of a circle with radius 7 (Use π = 22/7)?',
      answers: [
        { answer: '154', iscorrect: true },
        { answer: '144', iscorrect: false },
        { answer: '132', iscorrect: false },
        { answer: '126', iscorrect: false },
      ],
    },
    {
      id: 10,
      question: 'What is 15% of 200?',
      answers: [
        { answer: '20', iscorrect: false },
        { answer: '25', iscorrect: false },
        { answer: '30', iscorrect: true },
        { answer: '35', iscorrect: false },
      ],
    },
    {
      id: 11,
      question: 'Which property states that a(b + c) = ab + ac?',
      answers: [
        { answer: 'Commutative Property', iscorrect: false },
        { answer: 'Distributive Property', iscorrect: true },
        { answer: 'Associative Property', iscorrect: false },
        { answer: 'Identity Property', iscorrect: false },
      ],
    },
    {
      id: 12,
      question: 'What is the value of | -5 | ?',
      answers: [
        { answer: '0', iscorrect: false },
        { answer: '5', iscorrect: true },
        { answer: '-5', iscorrect: false },
        { answer: '10', iscorrect: false },
      ],
    },
    {
      id: 13,
      question: 'What is the greatest common divisor of 24 and 36?',
      answers: [
        { answer: '6', iscorrect: false },
        { answer: '12', iscorrect: true },
        { answer: '18', iscorrect: false },
        { answer: '24', iscorrect: false },
      ],
    },
    {
      id: 14,
      question: 'What is 2x + 3x equal to?',
      answers: [
        { answer: '5x', iscorrect: true },
        { answer: '6x', iscorrect: false },
        { answer: '10x', iscorrect: false },
        { answer: '15x', iscorrect: false },
      ],
    },
    {
      id: 15,
      question: 'What is the value of 10^3?',
      answers: [
        { answer: '30', iscorrect: false },
        { answer: '100', iscorrect: false },
        { answer: '1000', iscorrect: true },
        { answer: '10', iscorrect: false },
      ],
    },
    {
      id: 16,
      question: 'What is the perimeter of a square with side length 4?',
      answers: [
        { answer: '8', iscorrect: false },
        { answer: '12', iscorrect: false },
        { answer: '16', iscorrect: true },
        { answer: '20', iscorrect: false },
      ],
    },
    {
      id: 17,
      question: 'What is the sum of angles in a quadrilateral?',
      answers: [
        { answer: '180°', iscorrect: false },
        { answer: '360°', iscorrect: true },
        { answer: '270°', iscorrect: false },
        { answer: '90°', iscorrect: false },
      ],
    },
    {
      id: 18,
      question: 'What is 25% of 80?',
      answers: [
        { answer: '15', iscorrect: false },
        { answer: '20', iscorrect: true },
        { answer: '25', iscorrect: false },
        { answer: '30', iscorrect: false },
      ],
    },
    {
      id: 19,
      question: 'What is 1/2 + 3/4?',
      answers: [
        { answer: '5/4', iscorrect: false },
        { answer: '7/4', iscorrect: true },
        { answer: '1/4', iscorrect: false },
        { answer: '2/4', iscorrect: false },
      ],
    },
    {
      id: 20,
      question: 'What is 7 times 6?',
      answers: [
        { answer: '42', iscorrect: true },
        { answer: '36', iscorrect: false },
        { answer: '48', iscorrect: false },
        { answer: '54', iscorrect: false },
      ],
    },];
//for physics quiz
const physicsQuizData = [
  {
    id: 1,
    question: 'What is the unit of force in the International System of Units (SI)?',
    answers: [
      { answer: 'Newton', iscorrect: true },
      { answer: 'Joule', iscorrect: false },
      { answer: 'Watt', iscorrect: false },
      { answer: 'Pascal', iscorrect: false },
    ],
  },
  {
    id: 2,
    question: 'What is the speed of light in a vacuum?',
    answers: [
      { answer: '3 × 10^8 m/s', iscorrect: true },
      { answer: '1 × 10^6 m/s', iscorrect: false },
      { answer: '5 × 10^7 m/s', iscorrect: false },
      { answer: '2 × 10^8 m/s', iscorrect: false },
    ],
  },
  {
    id: 3,
    question: 'Which law states that "For every action, there is an equal and opposite reaction"?',
    answers: [
      { answer: "Newton's First Law", iscorrect: false },
      { answer: "Newton's Third Law", iscorrect: true },
      { answer: "Newton's Second Law", iscorrect: false },
      { answer: "Law of Inertia", iscorrect: false },
    ],
  },
  {
    id: 4,
    question: 'What is the formula for calculating kinetic energy?',
    answers: [
      { answer: 'KE = 1/2 mv^2', iscorrect: true },
      { answer: 'KE = mv^2', iscorrect: false },
      { answer: 'KE = mg', iscorrect: false },
      { answer: 'KE = mgh', iscorrect: false },
    ],
  },
  {
    id: 5,
    question: 'What is the gravitational acceleration on Earth’s surface?',
    answers: [
      { answer: '9.8 m/s^2', iscorrect: true },
      { answer: '8.5 m/s^2', iscorrect: false },
      { answer: '10.5 m/s^2', iscorrect: false },
      { answer: '9.1 m/s^2', iscorrect: false },
    ],
  },
  {
    id: 6,
    question: 'Which particle is responsible for electricity flow in conductors?',
    answers: [
      { answer: 'Electron', iscorrect: true },
      { answer: 'Proton', iscorrect: false },
      { answer: 'Neutron', iscorrect: false },
      { answer: 'Photon', iscorrect: false },
    ],
  },
  {
    id: 7,
    question: 'What type of lens is used to correct farsightedness?',
    answers: [
      { answer: 'Convex lens', iscorrect: true },
      { answer: 'Concave lens', iscorrect: false },
      { answer: 'Cylindrical lens', iscorrect: false },
      { answer: 'Bifocal lens', iscorrect: false },
    ],
  },
  {
    id: 8,
    question: 'Which of the following is a renewable energy source?',
    answers: [
      { answer: 'Solar power', iscorrect: true },
      { answer: 'Coal', iscorrect: false },
      { answer: 'Natural gas', iscorrect: false },
      { answer: 'Petroleum', iscorrect: false },
    ],
  },
  {
    id: 9,
    question: 'Which physical quantity is measured in Ohms?',
    answers: [
      { answer: 'Resistance', iscorrect: true },
      { answer: 'Capacitance', iscorrect: false },
      { answer: 'Inductance', iscorrect: false },
      { answer: 'Power', iscorrect: false },
    ],
  },
  {
    id: 10,
    question: 'What is the unit of electric current?',
    answers: [
      { answer: 'Ampere', iscorrect: true },
      { answer: 'Volt', iscorrect: false },
      { answer: 'Coulomb', iscorrect: false },
      { answer: 'Watt', iscorrect: false },
    ],
  },
  {
    id: 11,
    question: 'What is the phenomenon where light bends as it passes through a medium?',
    answers: [
      { answer: 'Refraction', iscorrect: true },
      { answer: 'Reflection', iscorrect: false },
      { answer: 'Diffraction', iscorrect: false },
      { answer: 'Dispersion', iscorrect: false },
    ],
  },
  {
    id: 12,
    question: 'Who is known as the "father of modern physics"?',
    answers: [
      { answer: 'Albert Einstein', iscorrect: true },
      { answer: 'Isaac Newton', iscorrect: false },
      { answer: 'Niels Bohr', iscorrect: false },
      { answer: 'Galileo Galilei', iscorrect: false },
    ],
  },
  {
    id: 13,
    question: 'What is the unit of frequency?',
    answers: [
      { answer: 'Hertz', iscorrect: true },
      { answer: 'Newton', iscorrect: false },
      { answer: 'Joule', iscorrect: false },
      { answer: 'Watt', iscorrect: false },
    ],
  },
  {
    id: 14,
    question: 'What is the formula for calculating pressure?',
    answers: [
      { answer: 'Pressure = Force / Area', iscorrect: true },
      { answer: 'Pressure = Mass / Volume', iscorrect: false },
      { answer: 'Pressure = Work / Time', iscorrect: false },
      { answer: 'Pressure = Power / Distance', iscorrect: false },
    ],
  },
  {
    id: 15,
    question: 'What is the electric charge of a proton?',
    answers: [
      { answer: '+1', iscorrect: true },
      { answer: '-1', iscorrect: false },
      { answer: '0', iscorrect: false },
      { answer: '+2', iscorrect: false },
    ],
  },
  {
    id: 16,
    question: 'What is the first law of thermodynamics?',
    answers: [
      { answer: 'Energy cannot be created or destroyed, only transferred or changed in form.', iscorrect: true },
      { answer: 'The entropy of the universe is always increasing.', iscorrect: false },
      { answer: 'For every action, there is an equal and opposite reaction.', iscorrect: false },
      { answer: 'The total energy in a closed system remains constant.', iscorrect: false },
    ],
  },
  {
    id: 17,
    question: 'What is the energy possessed by an object due to its motion?',
    answers: [
      { answer: 'Kinetic Energy', iscorrect: true },
      { answer: 'Potential Energy', iscorrect: false },
      { answer: 'Thermal Energy', iscorrect: false },
      { answer: 'Chemical Energy', iscorrect: false },
    ],
  },
  {
    id: 18,
    question: 'Which scientist formulated the laws of motion?',
    answers: [
      { answer: 'Isaac Newton', iscorrect: true },
      { answer: 'Albert Einstein', iscorrect: false },
      { answer: 'Galileo Galilei', iscorrect: false },
      { answer: 'James Clerk Maxwell', iscorrect: false },
    ],
  },
  {
    id: 19,
    question: 'Which of the following is a scalar quantity?',
    answers: [
      { answer: 'Speed', iscorrect: true },
      { answer: 'Velocity', iscorrect: false },
      { answer: 'Force', iscorrect: false },
      { answer: 'Acceleration', iscorrect: false },
    ],
  },
  {
    id: 20,
    question: 'What is the phenomenon of splitting white light into its component colors?',
    answers: [
      { answer: 'Dispersion', iscorrect: true },
      { answer: 'Diffraction', iscorrect: false },
      { answer: 'Refraction', iscorrect: false },
      { answer: 'Polarization', iscorrect: false },
    ],
  }
];
//for general quiz
const generalKnowledgeQuizData = [
  {
    id: 1,
    question: 'What is the capital of France?',
    answers: [
      { answer: 'Berlin', iscorrect: false },
      { answer: 'Madrid', iscorrect: false },
      { answer: 'Paris', iscorrect: true },
      { answer: 'Rome', iscorrect: false }
    ]
  },
  {
    id: 2,
    question: 'Which planet is known as the Red Planet?',
    answers: [
      { answer: 'Earth', isCorrect: false },
      { answer: 'Mars', isCorrect: true },
      { answer: 'Jupiter', isCorrect: false },
      { answer: 'Saturn', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: 'What is the largest ocean on Earth?',
    answers: [
      { answer: 'Atlantic Ocean', iscorrect: false },
      { answer: 'Indian Ocean', iscorrect: false },
      { answer: 'Arctic Ocean', iscorrect: false },
      { answer: 'Pacific Ocean', iscorrect: true }
    ]
  },
  {
    id: 4,
    question: 'Who wrote the play "Romeo and Juliet"?',
    answers: [
      { answer: 'Charles Dickens', iscorrect: false },
      { answer: 'William Shakespeare', iscorrect: true },
      { answer: 'Mark Twain', iscorrect: false },
      { answer: 'Jane Austen', iscorrect: false }
    ]
  },
  {
    id: 5,
    question: 'What is the largest mammal in the world?',
    answers: [
      { answer: 'Elephant', iscorrect: false },
      { answer: 'Blue Whale', iscorrect: true },
      { answer: 'Giraffe', iscorrect: false },
      { answer: 'Great White Shark', iscorrect: false }
    ]
  },
  {
    id: 6,
    question: 'In which year did the Titanic sink?',
    answers: [
      { answer: '1912', iscorrect: true },
      { answer: '1905', iscorrect: false },
      { answer: '1898', iscorrect: false },
      { answer: '1920', iscorrect: false }
    ]
  },
  {
    id: 7,
    question: 'Which country is known as the Land of the Rising Sun?',
    answers: [
      { answer: 'China', iscorrect: false },
      { answer: 'Japan', iscorrect: true },
      { answer: 'Thailand', iscorrect: false },
      { answer: 'Vietnam', iscorrect: false }
    ]
  },
  {
    id: 8,
    question: 'What is the smallest country in the world?',
    answers: [
      { answer: 'Monaco', iscorrect: false },
      { answer: 'Malta', iscorrect: false },
      { answer: 'Vatican City', iscorrect: true },
      { answer: 'San Marino', iscorrect: false }
    ]
  },
  {
    id: 9,
    question: 'Which element has the chemical symbol "O"?',
    answers: [
      { answer: 'Oxygen', iscorrect: true },
      { answer: 'Gold', iscorrect: false },
      { answer: 'Osmium', iscorrect: false },
      { answer: 'Hydrogen', iscorrect: false }
    ]
  },
  {
    id: 10,
    question: 'What is the currency of the United Kingdom?',
    answers: [
      { answer: 'Dollar', iscorrect: false },
      { answer: 'Euro', iscorrect: false },
      { answer: 'Pound Sterling', iscorrect: true },
      { answer: 'Yen', iscorrect: false }
    ]
  },
  {
    id: 11,
    question: 'Who painted the Mona Lisa?',
    answers: [
      { answer: 'Vincent van Gogh', iscorrect: false },
      { answer: 'Pablo Picasso', iscorrect: false },
      { answer: 'Leonardo da Vinci', iscorrect: true },
      { answer: 'Claude Monet', iscorrect: false }
    ]
  },
  {
    id: 12,
    question: 'Which gas is most abundant in the Earth\'s atmosphere?',
    answers: [
      { answer: 'Oxygen', iscorrect: false },
      { answer: 'Carbon Dioxide', iscorrect: false },
      { answer: 'Nitrogen', iscorrect: true },
      { answer: 'Hydrogen', iscorrect: false }
    ]
  },
  {
    id: 13,
    question: 'What is the longest river in the world?',
    answers: [
      { answer: 'Amazon River', iscorrect: false },
      { answer: 'Nile River', iscorrect: true },
      { answer: 'Yangtze River', iscorrect: false },
      { answer: 'Mississippi River', iscorrect: false }
    ]
  },
  {
    id: 14,
    question: 'Which planet is closest to the Sun?',
    answers: [
      { answer: 'Venus', iscorrect: false },
      { answer: 'Mars', iscorrect: false },
      { answer: 'Mercury', iscorrect: true },
      { answer: 'Earth', iscorrect: false }
    ]
  },
  {
    id: 15,
    question: 'In what year did World War II end?',
    answers: [
      { answer: '1945', iscorrect: true },
      { answer: '1940', iscorrect: false },
      { answer: '1939', iscorrect: false },
      { answer: '1950', iscorrect: false }
    ]
  },
  {
    id: 16,
    question: 'Who discovered penicillin?',
    answers: [
      { answer: 'Marie Curie', iscorrect: false },
      { answer: 'Alexander Fleming', iscorrect: true },
      { answer: 'Louis Pasteur', iscorrect: false },
      { answer: 'Isaac Newton', iscorrect: false }
    ]
  },
  {
    id: 17,
    question: 'Which famous scientist developed the theory of relativity?',
    answers: [
      { answer: 'Isaac Newton', iscorrect: false },
      { answer: 'Albert Einstein', iscorrect: true },
      { answer: 'Nikola Tesla', iscorrect: false },
      { answer: 'Stephen Hawking', iscorrect: false }
    ]
  },
  {
    id: 18,
    question: 'What is the capital of Australia?',
    answers: [
      { answer: 'Sydney', iscorrect: false },
      { answer: 'Melbourne', iscorrect: false },
      { answer: 'Canberra', iscorrect: true },
      { answer: 'Brisbane', iscorrect: false }
    ]
  },
  {
    id: 19,
    question: 'Which continent is the Sahara Desert located on?',
    answers: [
      { answer: 'Asia', iscorrect: false },
      { answer: 'Africa', iscorrect: true },
      { answer: 'Australia', iscorrect: false },
      { answer: 'South America', iscorrect: false }
    ]
  },
  {
    id: 20,
    question: 'Who was the first person to walk on the moon?',
    answers: [
      { answer: 'Buzz Aldrin', iscorrect: false },
      { answer: 'Yuri Gagarin', iscorrect: false },
      { answer: 'Neil Armstrong', iscorrect: true },
      { answer: 'Michael Collins', iscorrect: false }
    ]
  }
];

//for computer
const computerQuizData = [
  {
    id: 1,
    question: 'What does CPU stand for?',
    answers: [
      { answer: 'Central Processing Unit', iscorrect: true },
      { answer: 'Central Programming Unit', iscorrect: false },
      { answer: 'Computer Personal Unit', iscorrect: false },
      { answer: 'Control Processing Unit', iscorrect: false }
    ]
  },
  {
    id: 2,
    question: 'Which of the following is not an operating system?',
    answers: [
      { answer: 'Linux', iscorrect: false },
      { answer: 'Windows', iscorrect: false },
      { answer: 'Android', iscorrect: false },
      { answer: 'HTML', iscorrect: true }
    ]
  },
  {
    id: 3,
    question: 'What does RAM stand for?',
    answers: [
      { answer: 'Read Access Memory', iscorrect: false },
      { answer: 'Random Access Memory', iscorrect: true },
      { answer: 'Rapid Access Memory', iscorrect: false },
      { answer: 'Readily Available Memory', iscorrect: false }
    ]
  },
  {
    id: 4,
    question: 'What is the primary function of an operating system?',
    answers: [
      { answer: 'To manage hardware and software resources', iscorrect: true },
      { answer: 'To execute programming languages', iscorrect: false },
      { answer: 'To provide internet access', iscorrect: false },
      { answer: 'To run applications only', iscorrect: false }
    ]
  },
  {
    id: 5,
    question: 'Which programming language is primarily used for web development?',
    answers: [
      { answer: 'Python', iscorrect: false },
      { answer: 'Java', iscorrect: false },
      { answer: 'JavaScript', iscorrect: true },
      { answer: 'C++', iscorrect: false }
    ]
  },
  {
    id: 6,
    question: 'What is the function of a compiler?',
    answers: [
      { answer: 'To execute code directly', iscorrect: false },
      { answer: 'To convert source code into machine code', iscorrect: true },
      { answer: 'To debug code', iscorrect: false },
      { answer: 'To format code', iscorrect: false }
    ]
  },
  {
    id: 7,
    question: 'What does the term "phishing" refer to?',
    answers: [
      { answer: 'A method of hacking a computer', iscorrect: false },
      { answer: 'A type of online scam to steal personal information', iscorrect: true },
      { answer: 'An antivirus software', iscorrect: false },
      { answer: 'A programming technique', iscorrect: false }
    ]
  },
  {
    id: 8,
    question: 'Which device is used to input data into a computer?',
    answers: [
      { answer: 'Printer', iscorrect: false },
      { answer: 'Monitor', iscorrect: false },
      { answer: 'Keyboard', iscorrect: true },
      { answer: 'Speaker', iscorrect: false }
    ]
  },
  {
    id: 9,
    question: 'What is the function of a firewall?',
    answers: [
      { answer: 'To manage network traffic', iscorrect: false },
      { answer: 'To prevent unauthorized access to a network', iscorrect: true },
      { answer: 'To enhance internet speed', iscorrect: false },
      { answer: 'To store data securely', iscorrect: false }
    ]
  },
  {
    id: 10,
    question: 'Which of the following is a non-volatile memory?',
    answers: [
      { answer: 'RAM', iscorrect: false },
      { answer: 'Cache', iscorrect: false },
      { answer: 'Hard Disk', iscorrect: true },
      { answer: 'Register', iscorrect: false }
    ]
  },
  {
    id: 11,
    question: 'What does HTTP stand for?',
    answers: [
      { answer: 'Hypertext Transfer Protocol', iscorrect: true },
      { answer: 'Hyperlink Text Transfer Protocol', iscorrect: false },
      { answer: 'Hypertext Transfer Process', iscorrect: false },
      { answer: 'Hyper Transfer Protocol', iscorrect: false }
    ]
  },
  {
    id: 12,
    question: 'What is the main function of an ALU (Arithmetic Logic Unit)?',
    answers: [
      { answer: 'To perform arithmetic and logical operations', iscorrect: true },
      { answer: 'To manage memory', iscorrect: false },
      { answer: 'To control input and output devices', iscorrect: false },
      { answer: 'To execute instructions', iscorrect: false }
    ]
  },
  {
    id: 13,
    question: 'Which of the following is a markup language?',
    answers: [
      { answer: 'HTML', iscorrect: true },
      { answer: 'CSS', iscorrect: false },
      { answer: 'JavaScript', iscorrect: false },
      { answer: 'Python', iscorrect: false }
    ]
  },
  {
    id: 14,
    question: 'What is the purpose of an operating system’s kernel?',
    answers: [
      { answer: 'To provide a user interface', iscorrect: false },
      { answer: 'To manage system resources and communication', iscorrect: true },
      { answer: 'To run applications', iscorrect: false },
      { answer: 'To protect against malware', iscorrect: false }
    ]
  },
  {
    id: 15,
    question: 'Which type of software is designed to perform a specific task?',
    answers: [
      { answer: 'System software', iscorrect: false },
      { answer: 'Utility software', iscorrect: false },
      { answer: 'Application software', iscorrect: true },
      { answer: 'Malware', iscorrect: false }
    ]
  },
  {
    id: 16,
    question: 'What does a database management system (DBMS) do?',
    answers: [
      { answer: 'Stores and manages data', iscorrect: true },
      { answer: 'Provides internet access', iscorrect: false },
      { answer: 'Creates websites', iscorrect: false },
      { answer: 'Processes payments', iscorrect: false }
    ]
  },
  {
    id: 17,
    question: 'What is a URL?',
    answers: [
      { answer: 'Uniform Resource Locator', iscorrect: true },
      { answer: 'Universal Resource Link', iscorrect: false },
      { answer: 'Uniform Resource Link', iscorrect: false },
      { answer: 'Unique Resource Locator', iscorrect: false }
    ]
  },
  {
    id: 18,
    question: 'Which protocol is used to send emails?',
    answers: [
      { answer: 'FTP', iscorrect: false },
      { answer: 'SMTP', iscorrect: true },
      { answer: 'HTTP', iscorrect: false },
      { answer: 'POP3', iscorrect: false }
    ]
  },
  {
    id: 19,
    question: 'Which of the following is a type of malware?',
    answers: [
      { answer: 'Virus', iscorrect: true },
      { answer: 'Antivirus', iscorrect: false },
      { answer: 'Firewall', iscorrect: false },
      { answer: 'Router', iscorrect: false }
    ]
  },
  {
    id: 20,
    question: 'What is the purpose of an input device?',
    answers: [
      { answer: 'To display information', iscorrect: false },
      { answer: 'To provide data to the computer', iscorrect: true },
      { answer: 'To store data', iscorrect: false },
      { answer: 'To connect to the internet', iscorrect: false }
    ]
  }
];


 //start test


submitbtn.addEventListener('click',()=>{
  if(namebar.value==''){
    alert('enter your name first ')
  }
  else{
  infocontainer.forEach((item)=>item.style.display='none')
  resultbox.forEach((item)=>item.style.display='none')
  quizcontainer.style.display='block'
  displayname.textContent=`Your Name Is : ${namebar.value.toUpperCase()}`
selectedquestion.textContent=`MCQS Type Was ${category.value}`
totalquestions.textContent= `Total Number Of MCQ'S Are ${questionstype.value}`
    heading.textContent='Quiz  '
  }
}) 




const showQuestion=(questionnumber)=>{
  const maxQuestions = parseInt(questionstype.value);
  if (questionnumber >= maxQuestions) {
    // All selected questions have been answered, show the result
    quizcontainer.style.display = 'none';
    resultbox.forEach((item) => item.style.display = 'block');
    percentage_result = (correctanswercount / maxQuestions) * 100;
    percentage.textContent = `Your Total Percentage is: ${percentage_result.toFixed(2)}`;
  } 


  //console.log(questionstype.value)


  
  else{   
    

let userchoice=category.value;
let choice;
 if(userchoice=='GENERAL QUIZ'){
  choice=generalKnowledgeQuizData
}
else if(userchoice=='MATH QUIZ'){
choice=mathquizdata
}
else if(userchoice=='PHYSICS QUIZ'){
  choice=physicsQuizData
}


else if(userchoice=='COMPUTER QUIZ'){
  choice=computerQuizData
}

  question.textContent=choice[questionnumber].question;
    answers.innerHTML=choice[questionnumber].answers.map((item,index)=>
      `
        <div class="answer">
      <input type="radio" id="answer${index}" name="answers" value="${item.answer}">
      <label for="answer${index}">${item.answer}</label>
    </div>
      `
    ).join(" ")
  }

 
}

    

const submitans=()=>{

  submitanswer.addEventListener('click',(e)=>{
    const selectedAnswer = document.querySelector('input[name="answers"]:checked');
  if(!selectedAnswer){
    alert('SELECT ANY ANSWER ')
  }
  else{
    const correctanswer=mathquizdata[qindex]
    .answers.find(answers=>answers.iscorrect).answer
    if(correctanswer===selectedAnswer.value){
      correctanswercount++;
      correctscore.textContent=`Correct Answers Are : ${correctanswercount}`
    }
    else{
      wronganswercount++
      wrongscore.textContent=`Wrong Answers Are : ${wronganswercount}`   
    }
    totalscores=correctanswercount;
    if(totalscore==0){
      totalscore.textContent=`you have achieved 0 score`
    }
    else{
      totalscore.textContent=`your result is ${totalscores} points`
    }
    percentage_result=(totalscores/mathquizdata.length)*100;
    percentage.textContent = `Your Total Percentage is: ${percentage_result.toFixed(2)}%`;
    qindex++;
    showQuestion(qindex)
  }
  })
}
submitans()
showQuestion(qindex);
// for playagin
playagain.addEventListener('click',()=>{
   
    infocontainer.forEach((item)=>item.style.display='block')
    resultbox.forEach((item)=>item.style.display='none')
  heading.innerHTML='Quiz Settings... '
    namebar.value=" "
    qindex=0;
   showQuestion(qindex)
  correctanswercount='';
  wronganswerscount=''
  percentage_result=''
  wronganswercount=''
  percentage=''
  resultbox.textContent=''
  }) 
