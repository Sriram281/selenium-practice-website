import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const Search = () => {
  const nav = useNavigate();

  const options = [
    { value: "Navigate & Config", label: "Navigate & Config" },
    { value: "elements", label: "elements" },
    { value: "Forms", label: "Forms" },
    { value: "Navigation and Basics", label: "Navigation and Basics" },
    { value: "Page load strategy", label: "Page load strategy" },
    { value: "Interactions", label: "Interactions" },
    { value: "Waiting Strategies", label: "Waiting Strategies" },
    { value: "Frames and Windows", label: "Frames and Windows" },
    { value: "Assertions", label: "Assertions" },
    { value: "Miscellaneous", label: "Miscellaneous" },
    { value: "Testing Framework", label: "Testing Framework" },

    // subtopics
    // Elements
    { value: "Text box", label: "Text box" },
    { value: "Check Box", label: "Check Box" },
    { value: "Buttons", label: "Buttons" },
    { value: "Drop down", label: "Drop down" },
    { value: "Find all links", label: "Find all links" },
    { value: "Radio Button", label: "Radio Button" },
    { value: "Textarea", label: "Textarea" },

    // Navigate & configuration
    { value: "Navigate", label: "Navigate" },
    { value: "setProperty", label: "setProperty" },
    {
      value: "Chrome Option Remote Origin Allowance",
      label: "Chrome Option Remote Origin Allowance",
    },
    { value: "Desired capabilities", label: "Desired capabilities" },

    // Navigation and xpath
    { value: "XPath", label: "XPath" },
    { value: "Locators", label: "Locators" },
    { value: "Navigation", label: "Navigation" },

    // Page load strategy
    { value: "PageLoadStrategy.NORMAL", label: "PageLoadStrategy.NORMAL" },
    { value: "PageLoadStrategy.EAGER", label: "PageLoadStrategy.EAGER" },
    { value: "PageLoadStrategy.NONE", label: "PageLoadStrategy.NONE" },

    // Form
    { value: "Practice Form", label: "Practice Form" },

    // Interactions
    { value: "Alerts", label: "Alerts" },
    { value: "Drag and Drop", label: "Drag and Drop" },
    { value: "Keyboard Actions", label: "Keyboard Actions" },
    { value: "Mouse Actions", label: "Mouse Actions" },
    { value: "Multi-select", label: "Multi-select" },

    // waiting strategies
    { value: "Static Wait", label: "Static Wait" },
    { value: "Implicit Wait", label: "Implicit Wait" },
    { value: "Explicit Wait", label: "Explicit Wait" },
    { value: "Fluent wait", label: "Fluent wait" },

    // Frames and Windows
    { value: "Frames", label: "Frames" },
    { value: "Windows Handling", label: "Windows Handling" },

    // Assertions
    { value: "Hard Assertions", label: "Hard Assertions" },
    { value: "Soft Assertions", label: "Soft Assertions" },

    // Miscellaneous
    { value: "Screenshot", label: "Screenshot" },
    { value: "Scrolling Mouse", label: "Scrolling Mouse" },
    { value: "Scrolling Page", label: "Scrolling Page" },

    // Testing Framework Integration
    { value: "TestNG", label: "TestNG" },
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const searchoption = (selectedOption) => {
    setSelectedOption(selectedOption);
    const jsonString = JSON.stringify(selectedOption);
    const p = JSON.parse(jsonString);

    console.log("selectedOption : " + p.value);
    if (p.value == "Navigate & Config") {
      nav("/Navigate_and_configuration");
    } else if (p.value == "elements") {
      nav("/Header_body");
    } else if (p.value == "Forms") {
      nav("/new_form");
    } else if (p.value == "Navigation and Basics") {
      nav("/locators_and_xpath");
    } else if (p.value == "Page load strategy") {
      nav("/pageloadstrategy");
    } else if (p.value == "Interactions") {
      nav("/interactions");
    } else if (p.value == "Waiting Strategies") {
      nav("/waiting_strategies");
    } else if (p.value == "Frames and Windows") {
      nav("/frame_and_windows");
    } else if (p.value == "Assertions") {
      nav("/assertions");
    } else if (p.value == "Miscellaneous") {
      nav("/miscellaneous");
    } else if (p.value == "Testing Framework") {
      nav("/Testing_frameworks");
    }

    // subtopics
    else if (p.value == "Alerts") {
      nav("/Alerts");
    } else if (p.value == "Check Box") {
      nav("/check_box");
    } else if (p.value == "Buttons") {
      nav("/buttons");
    } else if (p.value == "Drop down") {
      nav("/Drop_down");
    } else if (p.value == "Find all links") {
      nav("/Find_all_links");
    } else if (p.value == "Radio Button") {
      nav("/radio_button");
    } else if (p.value == "Textarea") {
      nav("/text_area");
    } else if (p.value == "Text box") {
      nav("/text_box");
    }

    // Navigate & configuration
    else if (p.value == "Navigate") {
      nav("/Navigate_to");
    } else if (p.value == "setProperty") {
      nav("/SetProperty");
    } else if (p.value == "Chrome Option Remote Origin Allowance") {
      nav("/Chrome_options");
    } else if (p.value == "Desired capabilities") {
      nav("/Desired_Capabilities");
    }

    // Navigation and xpath
    else if (p.value == "XPath") {
      nav("/Xpath");
    } else if (p.value == "Locators") {
      nav("/locators");
    } else if (p.value == "Navigation") {
      nav("/navigation");
    }

    // Page load strategy
    else if (p.value == "PageLoadStrategy.NORMAL") {
      nav("/pageloadstrategy_normal");
    } else if (p.value == "PageLoadStrategy.EAGER") {
      nav("/pageloadstrategy_eager");
    } else if (p.value == "PageLoadStrategy.NONE") {
      nav("/pageloadstrategy_none");
    }

    // Form
    else if (p.value == "Practice Form") {
      nav("/practice_form");
    }

    // Interactions
    else if (p.value == "Alerts") {
      nav("/Alerts");
    } else if (p.value == "Drag and Drop") {
      nav("/drag_and_drop");
    } else if (p.value == "Keyboard Actions") {
      nav("/Keyboard_action");
    } else if (p.value == "Mouse Actions") {
      nav("/Mouse");
    } else if (p.value == "Multi-select") {
      nav("/Multi_select");
    }
    // waiting strategies
    else if (p.value == "Static Wait") {
      nav("/Static_wait");
    } else if (p.value == "Implicit Wait") {
      nav("/Implicit_wait");
    } else if (p.value == "Explicit Wait") {
      nav("/Explicit_wait");
    } else if (p.value == "Fluent wait") {
      nav("/Fluent_wait");
    }
    // Frames and Windows
    else if (p.value == "Frames") {
      nav("/frame");
    } else if (p.value == "Windows Handling") {
      nav("/Windows_handling");
    }
    // Assertions
    else if (p.value == "Hard Assertions") {
      nav("/Hard_assertions");
    } else if (p.value == "Soft Assertions") {
      nav("/Soft_assertions");
    }
    // Miscellaneous
    else if (p.value == "Screenshot") {
      nav("/screenshot");
    } else if (p.value == "Scrolling Mouse") {
      nav("/Scrolling_mouse");
    } else if (p.value == "Scrolling Page") {
      nav("/Scrolling_page");
    }
    // Testing Framework Integration
    else if (p.value == "TestNG") {
      nav("/Testng");
    }
  };

  // useEffect(() => {
  //   setSelectedOption(null);
  // }, []);

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderRadius: "50px", // Border radius
      backgroundColor: state.isFocused ? "hsl(80, 80%, 95%)" : "white", // Background color
      padding: "3px", // Padding
    }),
    option: (provided, state) => ({
      ...provided,
      //   #007bff
      backgroundColor: state.isSelected ? "hsl(0, 50%, 50%)" : "white", // Background color for selected option
      color: state.isSelected ? "white" : "black", // Text color for selected option
      "&:hover": {
        backgroundColor: "hsl(0, 30%, 50%)",
        color: "white", // Background color on hover
      },
    }),
  };
  return (
    <>
      <Select
        value={selectedOption}
        onChange={searchoption}
        options={options}
        isSearchable={true}
        placeholder="Search here..."
        className="w-100"
        styles={customStyles}
      />
    </>
  );
};

export default Search;
