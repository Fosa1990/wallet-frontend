import PropTypes from 'prop-types';
import zxcvbn from 'zxcvbn';
import {
  passwordProgressBarLow,
  passwordProgressBarWeak,
  passwordProgressBarExpected,
  passwordProgressBarGood,
  passwordProgressBarStrong,
} from '../../styles/stylesVars';

const PasswordStrength = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return { passwordProgressBarLow };
      case 1:
        return { passwordProgressBarWeak };
      case 2:
        return { passwordProgressBarExpected };
      case 3:
        return { passwordProgressBarGood };
      case 4:
        return { passwordProgressBarStrong };
      default:
        return 'none';
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return '';
      case 1:
        return 'Weak';
      case 2:
        return 'Expected';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  const changeProgressStyle = () => ({
    width: '100%',
    height: '4px',
    marginTop: '-32px',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    background: progressColor(),
    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    borderRadius: '4px',
  });

  return (
    <>
      <div className="progress" style={changeProgressStyle()}>
        <div className="progress_bar" style={changePasswordColor()}></div>
      </div>
      <p
        className="text_pr"
        style={{
          marginTop: '-32px',
          marginBottom: '52px',
          color: progressColor(),
        }}
      >
        {createPasswordLabel()}
      </p>
    </>
  );
};

PasswordStrength.propTypes = {
  password: PropTypes.string,
};

export default PasswordStrength;
