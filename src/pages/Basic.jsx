import React, { useState } from 'react';

const Basic = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userResponses, setUserResponses] = useState({
    page1: { question1: '', question2: '', question3: '' },
    page2: { question4: '', question5: '', question6: '' },
    page2: { question7: '', question8: '', question9: '' },
    // Add more pages as needed
  });

  const questions = [
    'What is your age, gender, height and weight?',
    'Do you smoke? If yes, how much and how long it has been?',
    'Do you consume alcohol? If yes, how frequently and in what quantity?',
  ];

  const handleInputChange = (page, question, answer) => {
    setUserResponses((prevResponses) => ({
      ...prevResponses,
      [page]: { ...prevResponses[page], [question]: answer },
    }));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages && areAllQuestionsAnswered(currentPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const areAllQuestionsAnswered = (page) => {
    const pageResponses = userResponses[`page${page}`];
    return Object.values(pageResponses).every((answer) => answer !== '');
  };

  const totalPages = 2; // Set the total number of pages

  return (
    <div className='ml-[30%] my-[10%]'>
      <h4>Age</h4>
        <input type="text" />
        <div className='mt-5'>
        <label>
          Gender:
          <form>
            <input type="radio" name="gender" value="male" className='ml-5 '/> Male
            <input type="radio" name="gender" value="female" className='ml-5 '/> Female
            <input type="radio" name="gender" value="other" className='ml-5 '/> Other
        </form>
        </label>
        </div>
    </div>
  );
};

export default Basic;
