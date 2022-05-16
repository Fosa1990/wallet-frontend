import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrenght = ({ password }) => {
    console.log('password', password);

    const testResult = zxcvbn(password);
    console.log('testResult', testResult);
  const num = (testResult.score * 100) / 4;
    const progressColor = () => {
      console.log('testResult.score', testResult.score);
    switch (testResult.score) {
      case 0:
        return "#FF6596";
      case 1:
        return "#FF6596";
      case 2:
        return "#FF6596";
      case 3:
        return "#24CCA7";
      case 4:
        return "#24CCA7";
      default:
        return "none";
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return "";
      case 1:
        return "Weak";
      case 2:
        return "Expected";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const changeProgressStyle = () => ({
    width: "100%",
    height: "4px",
    // marginTop: "-20px",
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: "4px",
    background: progressColor(),
    boxShadow: "0px 1px 8px rgba(36, 204, 167, 0.5)",
    borderRadius: "4px",
  });

  return (
    <>
      <div className="progress" style={changeProgressStyle()}>
        <div className="progress_bar" style={changePasswordColor()}></div>
      </div>
      <p className="text_pr" style={{ color: progressColor() }}>
        {createPasswordLabel()}
      </p>
    </>
  );
};

export default PasswordStrenght;