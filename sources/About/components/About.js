import React from 'react';
import PropTypes from 'prop-types';

const About = () => (<div>
  {/* <span><div className="triangle-div">О нас</div></span> */}
  <section className="about-container">
    <div className="help-box">
      <div className="img-container">
        <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-child.png" />
      </div>
      <div className="text-container children">
        <div className="title"> Помощь детям </div>
        <div className="description" >
          <p>Помощь слабозащищеннвм слоям населения, маообеспеченным семьям, детям с тяжолыми заболеваниями или находящимся на попечении у государства.</p>
          <p>Мы планируем делать ярмарки, где будут представлены вещи сделаны нашими подопечными, участвовать в проектах с другими организациями.</p>
          <p>Если вы хотите помогать людям, то вступайте в ряди волонтеров Благотворительного фонда. Мпы всегда рады тем кто готов помочь...</p>
        </div>
      </div>
    </div>
    <div className="help-box">
      <div className="text-container animal">
        <div className="title"> Помощь животным </div>
        <div className="description" >
          <p>Помощь слабозащищеннвм слоям населения, маообеспеченным семьям, детям с тяжолыми заболеваниями или находящимся на попечении у государства.</p>
          <p>Мы планируем делать ярмарки, где будут представлены вещи сделаны нашими подопечными, участвовать в проектах с другими организациями.</p>
          <p>Если вы хотите помогать людям, то вступайте в ряди волонтеров Благотворительного фонда. Мпы всегда рады тем кто готов помочь...</p>
        </div>
      </div>
      <div className="img-container">
        <img role="presentation" src="./sources/Base/styles/resources/pro-dobro-animal.png" />
      </div>
    </div>
  </section>
</div>
  );

About.propTypes = {
  dispatch: PropTypes.func,
  setloginDialogVisible: PropTypes.func,
  isVisible: PropTypes.Boolean,
};

export default About;

