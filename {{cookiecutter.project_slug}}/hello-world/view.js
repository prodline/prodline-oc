import styles from './css/styles.css';

export default ({ name, staticPath }) =>
  `<div class=${styles.awesome}>
    Hello ${name}!<br/>
    {{ cookiecutter.project_name }}
    <img src="${staticPath}img/logo.png" />
  </div>`;
