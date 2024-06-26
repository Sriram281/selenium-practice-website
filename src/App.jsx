import { Route, Routes } from "react-router-dom";

import Titles from "./Component_one/Title";
import Home from "./Home";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Elements from "./Component_one/Elements";
import Form from "./Subtopics/Form";
import Header from "./Header";
import Header_body from "./Subtopics/Header_body";
import Subtopics_body_images from "./Subtopics/Subtopics_body_img";
import Title_alter from "./Component_one/Title_alter";
import Text_box from "./Workout_topics/Text_box";
import Radio_button from "./Workout_topics/Radio_button";
import Check_box from "./Workout_topics/Check_box";
import Buttons from "./Workout_topics/Buttons";
import Text_area from "./Workout_topics/Text_area";
import Find_all_links from "./Workout_topics/Find_all_links";
import Alerts from "./Advanced_workout_topics/Alerts";
import Frame from "./Advanced_workout_topics/Frame";
import Drop_down from "./Advanced_workout_topics/Drop_down";

import Keyboard_action from "./Advanced_workout_topics/Keyboard_action";
import Hard_assertions from "./Advanced_workout_topics/Hard_assertions";
import Soft_assertions from "./Advanced_workout_topics/Soft_assertions";
import Mouse from "./Advanced_workout_topics/Mouse";
import Drag_and_drop from "./Advanced_workout_topics/Drag_and_Drop";
import Scrolling_page from "./Advanced_workout_topics/Scrolling_page";
import Scrolling_mouse from "./Advanced_workout_topics/Scrolling_mouse";

import Alerts_2 from "./Alerts_2";
import Screenshot from "./Advanced_workout_topics/Screenshot";
import Multi_select from "./Advanced_workout_topics/Multi_select";
import Windows_handling from "./Advanced_workout_topics/Windows_handling";
import Testng from "./Advanced_workout_topics/Testng";
import Static_wait from "./Advanced_workout_topics/Static_wait";
import Explicit_wait from "./Advanced_workout_topics/Explicit_wait";
import Implicit_wait from "./Advanced_workout_topics/Implicit_wait";
import Fluent_wait from "./Advanced_workout_topics/Fluent_wait";
import Xpath from "./Advanced_workout_topics/Xpath";
import Login from "./Login";
import New_forms from "./Subtopics/New_Forms";
import Navigation_and_basics from "./Subtopics/Navigation_and_basics";
import Interactions from "./Subtopics/Interactions";
import Miscellaneous from "./Subtopics/Miscellaneous";
import Waiting_strategies from "./Subtopics/Waiting_strategies";
import Testing_framework from "./Subtopics/Testing_frameworks";
import Frame_and_windows from "./Subtopics/Frame_and_windows";
import Assertions from "./Subtopics/Assertions";
import Draganddrop from "./Advanced_workout_topics/DragAndDrop";
import Toast from "./Toast";
import Locators from "./Advanced_workout_topics/Locators";
import Practice_form from "./Advanced_workout_topics/Practice_form";
import Form_list from "./Advanced_workout_topics/Form_list";
import Navigation from "./Advanced_workout_topics/Navigation";
import Navigation_list from "./Advanced_workout_topics/Navigation_list";
import Pageload_normal from "./Advanced_workout_topics/Pageload_normal";
import Pageload_eager from "./Advanced_workout_topics/Pageload_eager";
import Pageload_none from "./Advanced_workout_topics/Pageload_none";
import Pageload_strategy from "./Subtopics/Pageload_strategy";
import Navigate_and_configuration from "./Subtopics/Navigate_and_configuration";
import Navigate_to from "./Advanced_workout_topics/Navigate_to";
import Chrome_options from "./Advanced_workout_topics/Chrome_options";
import Desired_Capabilities from "./Advanced_workout_topics/Desired_capabilities";
import SetProperty from "./Advanced_workout_topics/set_property";
import Model_for_image from "./Model_for_image";
import Footer from "./Footer";
import Eduspere_logo from "./Edusphere_logo";
import Introduction from "./Introduction";
import Search from "./Search";
import Workouts from "./Subtopics/Workouts";
import Login_check from "./Login_check";
import Subtopics_body_images2 from "./Subtopics/subtopics_body_image2";

// import "./Styles.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Header" element={<Header />} />

        {/* sub_body_img */}
        <Route
          path="/Subtopics_body_images"
          element={<Subtopics_body_images />}
        />
        <Route path="/Titles" element={<Titles />} />
        <Route path="/Title_alter" element={<Title_alter />} />
        <Route path="/Elements" element={<Elements />} />
        {/* Subtopics */}
        <Route path="/Form" element={<Form />} />
        {/* Workout topics */}
        <Route path="/text_box" element={<Text_box />} />
        <Route path="/radio_button" element={<Radio_button />} />
        <Route path="/check_box" element={<Check_box />} />
        <Route path="/buttons" element={<Buttons />} />

        <Route path="/text_area" element={<Text_area />} />

        <Route path="/Find_all_links" element={<Find_all_links />} />
        {/* Advanced workout topics */}
        <Route path="/Alerts" element={<Alerts />} />
        <Route path="/frame" element={<Frame />} />
        <Route path="/drop_down" element={<Drop_down />} />
        <Route path="/drag_and_drop" element={<Drag_and_drop />} />
        <Route path="/d" element={<Draganddrop />} />
        <Route path="/Keyboard_action" element={<Keyboard_action />} />
        <Route path="/Hard_assertions" element={<Hard_assertions />} />
        <Route path="/Soft_assertions" element={<Soft_assertions />} />
        <Route path="/Mouse" element={<Mouse />} />
        <Route path="/Scrolling_page" element={<Scrolling_page />} />
        <Route path="/Scrolling_mouse" element={<Scrolling_mouse />} />
        <Route path="/alerts_2" element={<Alerts_2 />} />
        <Route path="/screenshot" element={<Screenshot />} />
        <Route path="/Multi_select" element={<Multi_select />} />
        <Route path="/Windows_handling" element={<Windows_handling />} />
        <Route path="/Testng" element={<Testng />} />
        <Route path="/Static_wait" element={<Static_wait />} />
        <Route path="/Explicit_wait" element={<Explicit_wait />} />
        <Route path="/Implicit_wait" element={<Implicit_wait />} />
        <Route path="/Fluent_wait" element={<Fluent_wait />} />
        <Route path="/Xpath" element={<Xpath />} />
        <Route path="/pageloadstrategy_normal" element={<Pageload_normal />} />
        <Route path="/pageloadstrategy_eager" element={<Pageload_eager />} />
        <Route path="/pageloadstrategy_none" element={<Pageload_none />} />
        <Route path="/Navigate_to" element={<Navigate_to />} />
        <Route path="/SetProperty" element={<SetProperty />} />
        <Route path="/Chrome_options" element={<Chrome_options />} />
        <Route
          path="/Desired_Capabilities"
          element={<Desired_Capabilities />}
        />

        {/* subtopics */}
        <Route path="/Header_body" element={<Header_body />} />
        <Route path="/new_form" element={<New_forms />} />
        <Route path="/interactions" element={<Interactions />} />
        <Route path="/miscellaneous" element={<Miscellaneous />} />
        <Route path="/locators_and_xpath" element={<Navigation_and_basics />} />
        <Route path="/waiting_strategies" element={<Waiting_strategies />} />
        <Route path="/frame_and_windows" element={<Frame_and_windows />} />
        <Route path="/assertions" element={<Assertions />} />
        <Route path="/Testing_frameworks" element={<Testing_framework />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/locators" element={<Locators />} />
        <Route path="/practice_form" element={<Practice_form />} />
        <Route path="/form_list" element={<Form_list />} />
        <Route path="/navigation" element={<Navigation />} />
        <Route path="/navigation_list" element={<Navigation_list />} />
        <Route path="/pageloadstrategy" element={<Pageload_strategy />} />
        <Route
          path="/Navigate_and_configuration"
          element={<Navigate_and_configuration />}
        />
        <Route path="/Model_for_image" element={<Model_for_image />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/edusphere_images_comp" element={<Eduspere_logo />} />
        <Route path="/Introduction" element={<Introduction />} />
        <Route path="/search" element={<Search />} />
        <Route path="/workout" element={<Workouts />} />
        <Route path="/login_check" element={<Login_check />} />
        <Route path="/subtopic_image2" element={<Subtopics_body_images2 />} />
      </Routes>
    </>
  );
};

export default App;
