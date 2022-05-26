import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../Component/Header';
// import style from '../css/Feedback.module.css';

class Feedback extends Component {
  constructor() {
    super();
    this.state = {
      playerDataLocal: {},
    };
  }

  componentDidMount() {
    const { playerDataGlobal } = this.props;
    this.setState({
      playerDataLocal: playerDataGlobal,
    });
  }

  render() {
    const THREE = 3;
    const { history } = this.props;
    const { playerDataLocal } = this.state;
    return (
      <div className="background">
        <Header />
        <section className="container">
          <h1 data-testid="feedback-text">
            {playerDataLocal.assertions <= THREE ? 'Could be better...' : 'Well Done!' }

          </h1>
          <div
            data-testid="feedback-total-question"
          >
            {`Você acertou ${playerDataLocal.assertions} Perguntas`}
          </div>
          <div data-testid="feedback-total-score">
            {`Um total de ${playerDataLocal.score} pontos`}
          </div>
          <button
            type="button"
            data-testid="btn-ranking"
            onClick={ () => history.push('/ranking') }
          >
            Ranking

          </button>
          <button
            type="button"
            data-testid="btn-play-again"
            onClick={ () => history.push('/') }
          >
            Play Again

          </button>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  playerDataGlobal: state.player,
});

Feedback.propTypes = {
  playerDataGlobal: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
    gravatarEmail: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({ push: PropTypes.func }).isRequired,
};

export default connect(mapStateToProps)(Feedback);
