var React = require('react');
var PropTypes = require('prop-types');

function SelectLanguage (props) {
  var languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
  return (
    <ul className='languages'>
      {languages.map(function (lang) {
        return (
          <li
            style = {lang === props.selectedLangauge ? {color: '#d0021b'} : null}
            onClick = {props.onSelect.bind(null, lang)}
            key={lang}>
              {lang}
          </li>
        )
      })}
    </ul>
  )
}

SelectLanguage.propTypes = {
  selectedLangauge: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLangauge: 'All'
    };

    this.updateLanguage = this.updateLanguage.bind(this);
  }

  updateLanguage(lang) {
    this.setState(function() {
      return {
        selectedLangauge: lang
      }
    });
  }

  render() {

    return (
      <div>
        <SelectLanguage
          selectedLangauge={this.state.selectedLangauge}
          onSelect={this.updateLanguage}/>
      </div>
    )
  }
}

module.exports = Popular;
