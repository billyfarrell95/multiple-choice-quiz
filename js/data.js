// Trivia questions and answers
const triviaData = [
    {
        id: 1,
        question: 'Which of the following is a programming language commonly used for web development?',
        options: ['HTML', 'CSS', 'JavaScript', 'All of the above'],
        answer: 'All of the above'
    },
    {
        id: 2,
        question: 'What does "HTML" stand for?',
        options: ['Hyperlinks and Text Markup Language', 'Hypertext Markup Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Leveler'],
        answer: 'Hypertext Markup Language'
    },
    {
        id: 3,
        question: 'Which programming language is primarily used for adding interactivity and dynamic content to websites?',
        options: ['Python', 'Java', 'JavaScript', 'Ruby'],
        answer: 'JavaScript'
    },
    {
        id: 4,
        question: 'Cascading Style Sheets (CSS) is mainly used for what purpose in web development?',
        options: ['Adding interactivity', 'Handling server-side operations', 'Structuring web pages', 'Styling and layout'],
        answer: 'Styling and layout'
    },
    {
        id: 5,
        question: 'Which of the following is NOT a web browser?',
        options: ['Chrome', 'Firefox', 'Safari', 'MySQL'],
        answer: 'MySQL'
    },
    {
        id: 6,
        question: 'What is the primary purpose of the "DOCTYPE" declaration in an HTML document?',
        options: ['It specifies the version of HTML used in the document.', 'It links the document to an external stylesheet.', 'It declares the character encoding of the document.', 'It informs the browser which rendering mode to use.'],
        answer: 'It informs the browser which rendering mode to use.'
    },
    {
        id: 7,
        question: 'Which tag is used to link an external JavaScript file to an HTML document?',
        options: ['<script>', '<link>', '<js>', '<javascript>'],
        answer: '<script>'
    },
    {
        id: 8,
        question: 'What does the acronym "API" stand for in web development?',
        options: ['Advanced Protocol Interface', 'Application Programming Interface', 'All-Purpose Integration', 'Automated Program Interaction'],
        answer: 'Application Programming Interface'
    },
    {
        id: 9,
        question: 'Which "HTTP" method is primarily used for retrieving data from a server in web development?',
        options: ['POST', 'PUT', 'GET', 'DELETE'],
        answer: 'GET'
    },
    {
        id: 10,
        question: 'In responsive web design, what technology is used to adjust the layout and elements based on the user\'s device screen size?',
        options: ['HTML', 'CSS', 'JavaScript', 'Media Queries'],
        answer: 'Media Queries'
    },
    {
        id: 11,
        question: 'Which HTML tag is used to define a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<url>'],
        answer: '<a>'
      },
      {
        id: 12,
        question: 'Which CSS property is used to change the text color?',
        options: ['color', 'font-color', 'text-color', 'text-style'],
        answer: 'color'
      },
      {
        id: 13,
        question: 'What is the result of the following JavaScript code?\n\nvar x = "5";\nvar y = 2;\nconsole.log(x + y);',
        options: ['7', '52', '5 + 2', 'Error'],
        answer: '52'
      },
      {
        id: 14,
        question: 'Which HTML element is used to define the largest heading?',
        options: ['<heading>', '<h6>', '<h1>', '<h4>'],
        answer: '<h1>'
      },
      {
        id: 15,
        question: 'What is the purpose of the "box-sizing" CSS property?',
        options: ['To specify the dimensions of a box', 'To control the visibility of an element', 'To set the border style of a box', 'To control how the total width and height of an element are calculated'],
        answer: 'To control how the total width and height of an element are calculated'
      }
];

export default triviaData;