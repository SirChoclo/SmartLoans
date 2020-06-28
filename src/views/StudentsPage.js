import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import StudentPains from '../components/sections/students/StudentPains';

const StudentsPage = () => {
  return (
    <>
      <GenericSection children={<StudentPains/>}/>
      <Cta topDivider bottomDivider/>
    </>
  );
}

export default StudentsPage;