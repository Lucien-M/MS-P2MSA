import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const UpdatePassword = (props) => {
  let navigation = useNavigate();
  const [note, setNote] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: ""
  });
  const navigate = useNavigate();
  const changePassword = async (
    email,
    oldPassword,
    newPassword,
    confirmNewPassword
  ) => {
    // TODO: API Call
    // API Call
    const response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}api/auth/updatepassword`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem("token")
        },
        body: JSON.stringify({
          email: note.email,
          oldPassword: note.oldPassword,
          newPassword: note.newPassword,
          confirmNewPassword: note.confirmNewPassword
        })
      }
    );

    const json = await response.json();
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      navigate("/");
      props.showAlert("Password updated successfully!", "success");
    } else {
      props.showAlert("Invalid details", "danger");
    }
    navigation("/login");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
    } else {
      navigation("/updatepassword");
    }
    // eslint-disable-next-line
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    UpdatePassword(
      note.email,
      note.oldPassword,
      note.newPassword,
      note.confirmNewPassword
    );
    setNote({
      email: "",
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: ""
    });
  };

  return (
    <>
      <section className="h-full my-20 gradient-form md:h-screen">
        <div className="container h-full px-6 py-12">
          <div className="flex flex-wrap items-center justify-center h-full text-gray-800 g-6">
            <div className="xl:w-10/12">
              <div className="block bg-white rounded-lg shadow-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"></div>
                  <div className="px-4 lg:w-6/12 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <form>
                        <h1>UPDATE YOUR PASSWORD </h1>
                        <div className="mb-4">
                          <input
                            type="text"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Email"
                            name="email"
                            onChange={onChange}
                            value={note.email}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="old"
                            placeholder="Old Password"
                            name="oldPassword"
                            onChange={onChange}
                            value={note.oldPassword}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="new"
                            placeholder="New Password"
                            name="newPassword"
                            onChange={onChange}
                            value={note.newPassword}
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="confirm"
                            placeholder="Confirm Password"
                            name="confirmNewPassword"
                            onChange={onChange}
                            value={note.confirmNewPassword}
                          />
                        </div>

                        <div className="pt-1 pb-1 mb-12 text-center">
                          <Button
                            variant="primary"
                            type="submit"
                            className="inline-block px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3 bg-indigo-600"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            onClick={(handleClick, changePassword)}
                          >
                            Update Password
                          </Button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdatePassword;
