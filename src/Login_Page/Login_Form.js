import React, { useState, useEffect, useContext } from "react";
import "./Login_Form.css";
import Button from "@material-ui/core/Button";
import { db } from "../firebase";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { AppContext } from "./Login_Context";
import Loader from "react-loader-spinner";
import { useStateValue } from "../StateProvider";
//

export default function Login_Form() {
  const [loginPin, setLoginPin] = useState("");
  const { UserObject } = useContext(AppContext);
  const [newUsers, setNewUsers] = useState(UserObject);
  const [{ basket, userPin, userDocId }, dispatch] = useStateValue();

  const [keepPin, setKeepPin] = useState(1);
  useEffect(() => {
    setKeepPin(JSON.parse(window.sessionStorage.getItem("keepPin")));
    // console.log(keepPin);
  }, []);

  useEffect(() => {
    window.sessionStorage.setItem("keepPin", keepPin);
  }, [keepPin]);

  useEffect(() => {
    async function loadResponse() {
      db.collection("users").onSnapshot((query) => {
        setNewUsers(
          query.docs.map((info) => ({
            id: info.id,
            Logged_in: info.data().logged_in,
            Pin: info.data().pin,
          }))
        );
      });
    }
    loadResponse();
  }, []);

  console.log(newUsers);

  //   LOGUSERIN FUNCTION
  const logUserIn = (userState) => {
    let filterUser = [...userState];
    const willFilter = filterUser.filter(
      (pinCode) => pinCode.Pin === parseInt(loginPin)
    );

    let mapUser = [...willFilter];
    const willMap = mapUser.map((index) => {
      return index.Pin;
    });

    let checkUser = [...willFilter];
    const alreadyLoggedIn = checkUser.map((logged) => logged.Logged_in);

    if (alreadyLoggedIn[0] === false) {
      return willMap[0];
    }
  };

  // NEW FUNCTION
  const newLoggedUser = (userState) => {
    let filterUser = [...userState];
    const willFilter = filterUser.filter(
      (pinCode) => pinCode.Pin === parseInt(loginPin)
    );

    let mapUser = [...willFilter];
    const willMap = mapUser.map((index) => {
      return index.Pin;
    });

    const getUser_Doc_Id = [...willFilter];
    const getFirestore_Id = getUser_Doc_Id[0]?.id;

    dispatch({
      type: "DOC_ID",
      item: {
        doc_id: getFirestore_Id,
      },
    });

    let checkUser = [...willFilter];
    const alreadyLoggedIn = checkUser.map((logged) => logged.Logged_in);

    if (alreadyLoggedIn[0] === false) {
      return willMap[0];
    } else {
      alert(`Your  "Pin"  is invalid !!`);
    }

    setLoginPin("");
  };

  const Route_user = logUserIn(newUsers);

  if (newUsers.length === 0) {
    return (
      <div className="login__loader">
        <div>
          <Loader type="Oval" color="white" height={80} width={80} />
          <p className="login__loaderText">Loading.....</p>
        </div>
      </div>
    );
  } else {
    <h2>display component</h2>;
    return (
      <div className="loginform__container">
        <form noValidate autoComplete="off">
          <div className="entryform">
            <TextField
              className="login_form"
              type="password"
              label="Enter Pin"
              value={loginPin}
              onChange={(e) => setLoginPin(e.target.value)}
              variant="outlined"
              size="small"
            />

            <div className="entryform__btn">
              <Link
                to={parseInt(loginPin) === Route_user ? "/home" : "/"}
                style={{ textDecoration: "none" }}
              >
                <div>
                  <Button
                    style={{
                      borderRadius: 35,
                      backgroundColor: "#ecca08",
                      padding: "10px 30px",
                      fontSize: "18px",
                    }}
                    variant="contained"
                    size="large"
                    onClick={() => {
                      // newLoggedUser(newUsers);

                      const addUserPin = () => {
                        const newWillMap = newLoggedUser(newUsers);

                        setKeepPin(newWillMap);
                        dispatch({
                          type: "ADD_USER_PIN",
                          item: {
                            Pin: keepPin,
                          },
                        });
                      };
                      addUserPin();
                    }}
                  >
                    Login
                  </Button>
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
