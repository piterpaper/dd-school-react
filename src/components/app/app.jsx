import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../../pages/main/main";
import Archive from "../../pages/archive/archive";
import { AppRoute } from "../../const.js";
import Form from "../../pages/form/form";
import NotFound from "../NotFound/notFound";
import { observer } from "mobx-react-lite";


const App = observer(() => {



  return (
    <BrowserRouter>
      <Switch>
        <Route path= '/' exact>
          <Main />
        </Route>
        <Route path={AppRoute.ARCHIVE} exact >
        <Archive />
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
});

export default App;
