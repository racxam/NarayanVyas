import React from 'react';
import MLHandwrittenNotesMain from './MLNotesMain';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const MLHandwrittenNotes = () => {
  return (
    <>
      <Header
        parentMenu="page"
        headerClass="header__area header__transparent-2 header-width header-bg-color-2 header__mlr header__mt"
      />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <MLHandwrittenNotesMain />
          <Footer />
        </div>
      </div>

    </>
  );
}

export default MLHandwrittenNotes;
