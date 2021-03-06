import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import GetStartedPage from "./Containers/GetStartedPage";
import UserDetailPage from "./Containers/UserDetailPage";
import HowConfidentYouFeelPage from "./Containers/HowConfidentYouFeelPage";
import HowAreYouFeelingPage from "./Containers/HowAreYouFeelingPage";
import ApproachToTheFuturePage from "./Containers/ApproachToTheFuturePage";
import WhoDependsPage from "./Containers/WhoDependsPage";
import FirstNarrative from "./Containers/FirstNarrative";
import Top3HealthProritiesPage from "./Containers/Top3HealthProritiesPage";
import VegetablesPage from "./Containers/VegetablesPage";
import SnacksPage from "./Containers/SnacksPage";
import FastFoodPage from "./Containers/FastFoodPage";
import NonAlcoholicDrinkPage from "./Containers/NonAlcoholicDrinkPage";
import DairyIntakePage from "./Containers/DairyIntakePage";
import DoYouDrinkPage from "./Containers/DoYouDrinkPage";
import DrinksPage from "./Containers/DrinksPage";
import SortOfExercisePage from "./Containers/SortOfExercisePage";
import SmokePage from "./Containers/SmokePage";
import DailyActivitiesPage from "./Containers/DailyActivitiesPage";
import SecondNarrative from "./Containers/SecondNarrative";
import MoneyPage from "./Containers/MoneyPage";
import FinancialPrioritiesPage from "./Containers/FinancialPrioritiesPage";
import BudgetPage from "./Containers/BudgetPage";
import WorkArrangementPage from "./Containers/WorkArrangementPage";
import WorkStatusPage from "./Containers/WorkStatusPage";
import WorkSituationPage from "./Containers/WorkSituationPage";
import ThirdNarrative from "./Containers/ThirdNarrative";
import FamilyFriendsContactPage from "./Containers/FamilyFriendsContactPage";
import SocialActivePage from "./Containers/SocialActivePage";
import FourthNarrative from "./Containers/FourthNarrative";
import ErrorPage from "./Containers/ErrorPage";

export default function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" strict component={GetStartedPage} />
          <Route path="/details" component={UserDetailPage} />
          <Route path="/question1" component={HowConfidentYouFeelPage} />
          <Route path="/question2" component={HowAreYouFeelingPage} />
          <Route path="/question3" component={ApproachToTheFuturePage} />
          <Route path="/question4" component={WhoDependsPage} />
          <Route path="/narrative1" component={FirstNarrative} />
          <Route path="/question5" component={Top3HealthProritiesPage} />
          <Route path="/question6" component={VegetablesPage} />
          <Route path="/question7" component={SnacksPage} />
          <Route path="/question8" component={FastFoodPage} />
          <Route path="/question9" component={NonAlcoholicDrinkPage} />
          <Route path="/question10" component={DairyIntakePage} />
          <Route path="/question11" component={DoYouDrinkPage} />
          <Route path="/question12" component={DrinksPage} />
          <Route path="/question13" component={SortOfExercisePage} />
          <Route path="/question14" component={SmokePage} />
          <Route path="/question15" component={DailyActivitiesPage} />
          <Route path="/narrative2" component={SecondNarrative} />
          <Route path="/question16" component={MoneyPage} />
          <Route path="/question17" component={FinancialPrioritiesPage} />
          <Route path="/question18" component={BudgetPage} />
          <Route path="/question19" component={WorkArrangementPage} />
          <Route path="/question20" component={WorkStatusPage} />
          <Route path="/question21" component={WorkSituationPage} />
          <Route path="/narrative3" component={ThirdNarrative} />
          <Route path="/question22" component={FamilyFriendsContactPage} />
          <Route path="/question23" component={SocialActivePage} />
          <Route path="/narrative4" component={FourthNarrative} />


          <Route component={ErrorPage} />
        </Switch>
      </BrowserRouter>
  );
}

