import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Layout from "./Components/Layout";

import HowConfidentYouFeelPage from "./Containers/HowConfidentYouFeelPage";
import HowAreYouFeelingPage from "./Containers/HowAreYouFeelingPage";
import ApproachToTheFuture from "./Containers/ApproachToTheFuture";
import WhoDependsPage from "./Containers/WhoDependsPage";
const HomePage = () => {
  return (
    <Layout currentPage={0} numPages={20} nextPagePath="/details">
      <div>
        <p>This is home page</p>
      </div>
    </Layout>
  );
};

const DetailsForm = () => {
  return (
    <Layout currentPage={0} numPages={20} nextPagePath="/question1">
      <div>
        <p>user details page will come here</p>
      </div>
    </Layout>
  );
};

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" strict component={HomePage} />
          <Route path="/details" component={DetailsForm} />
          <Route path="/question1" component={HowConfidentYouFeelPage} />
          <Route path="/question2" component={HowAreYouFeelingPage} />
          <Route path="/question3" component={ApproachToTheFuture} />
          <Route path="/question4" component={WhoDependsPage} />
          <Route component={HomePage} />
        </Switch>
      </BrowserRouter>
  );
}

