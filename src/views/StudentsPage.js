import React from 'react';
// import sections
import Cta from '../components/sections/Cta';
import GenericSection from '../components/sections/GenericSection';
import StudentPains from '../components/sections/students/StudentPains';
import StudentIconAttribution from '../components/sections/students/StudentIconAttribution';

const StudentsPage = () => (
  <>
    <GenericSection>
      <StudentPains />
    </GenericSection>
    <Cta topDivider bottomDivider />
    <StudentIconAttribution />
  </>
);

export default StudentsPage;
