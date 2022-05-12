import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import { AppRoute } from "../../const.js";
import Form from "../../pages/form/form";
import NotFound from "../NotFound/notFound";

const App = ({events}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path= '/' exact>
          <Main events={events}/>
        </Route>
        <Route path={AppRoute.ARCHIVE} exact >
        <Archive events={events}/>
        </Route>
         <Route path ={AppRoute.EVENT} exact>
          <Form />
        </Route>

        <Route>
          <NotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
