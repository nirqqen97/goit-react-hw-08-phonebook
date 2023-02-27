import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container, Title } from "./App.styled";
import { Header } from "./Header/Header";
import Login from "./Login/Login";
import { refreshUser } from "redux/Auth/auth.operaiton";
import { RestrictedRouse } from "../RestrictedRoute";
import { PrivateRoute } from "PrivateRoute";

const LazyContactsPage = lazy(() => import("../ContactsPage/ContactsPage"));

const Register = lazy(() => import("./Register/Register"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    

    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <BrowserRouter basename="goit-react-hw-08-phonebook">
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<RestrictedRouse element = {<Login/>} redirectTo = "contacts" />} />

          <Route
            path="contacts"
            element={
              <Suspense fallback={<Title>Loading...</Title>}>
                <PrivateRoute element = {<LazyContactsPage/>} redirectTo = "/" />
              
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <RestrictedRouse element = {<Register/>} redirectTo = "contacts" />}
          />
        </Routes>
      </Container>
    </BrowserRouter>
  );
};
