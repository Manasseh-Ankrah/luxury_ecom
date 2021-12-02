import React from "react";
import "./Message.css";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import { CheckCircleOutlineRounded } from "@material-ui/icons";

function Message() {
  return (
    <div className="message">
      {/* <Paper className="alert_wraper"> */}
      <div className="alert">
        <div className="alert__content">
          <h3 className="success">PAYMENT WAS SUCCESSFUL</h3>
          <CheckCircleOutlineRounded
            style={{ color: "black" }}
            className="check"
          />
        </div>

        <div className="entryform__btn">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div>
              <Button
                variant="contained"
                style={{ marginBottom: 10 }}
                color="primary"
                size="large"
              >
                Logout
              </Button>
            </div>
          </Link>
        </div>
      </div>
      {/* </Paper> */}
    </div>
  );
}

export default Message;
