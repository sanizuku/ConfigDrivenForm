import React, { useEffect } from "react";
import FormWrapper from "./components/FormWrapper";
import UseForm from "./hooks/UseForm";

const App = () => {
  const { formState, setFormState } = UseForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      country: "IN",
      gender: "male",
      terms: "false",
    },
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
    },
  });
  const { setFieldValue, setValues, handleSubmit } = formState;
  const mockData = {
    fullName: "John Doe",

    password: "password123",
    confirmPassword: "password123",
    email: "john.doe@example.com",
    gender: "male",
    country: "USA",
  };
  const formData = [
    {
      control: "INPUT",
      type: "text",
      label: "Full Name",
      name: "fullName",
      area: "a",
      areaL: "al",
    },
    {
      control: "INPUT",
      type: "email",
      label: "Email Address",
      name: "email",

      area: "b",
      areaL: "bl",
    },
    {
      control: "INPUT",
      type: "password",
      label: "Password",
      name: "password",

      area: "c",
      areaL: "cl",
    },
    {
      control: "INPUT",
      type: "password",
      label: "Confirm Password",
      name: "confirmPassword",

      area: "d",
      areaL: "dl",
    },
    {
      control: "SELECT",
      label: "Country",
      name: "country",
      options: [
        { value: "USA", label: "United States" },
        { value: "IN", label: "India" },
        { value: "UK", label: "United Kingdom" },
      ],

      area: "e",
      areaL: "el",
    },
    {
      control: "RADIO",
      label: "Gender",
      name: "gender",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" },
      ],

      area: "f",
      areaL: "fl",
    },
    {
      control: "CHECKBOX",
      label: "Accept Terms and Conditions",
      name: "terms",
      options: [
        { value: "accept", label: "I accept the terms and conditions" },
      ],

      area: "g",
      areaL: "gl",
    },
  ];

  const gridStyle = {
    display: "grid",
    gap: "10px",
    gridTemplateAreas: `"al a"
                        "bl b"
                        "cl c"
                        "dl d"
                        "el e"
                        "fl f"
                        "gl g"`,
    gridTemplateColumns: "1fr 1fr",
  };
  useEffect(() => {
    // Simulating API call delay with setTimeout
    setTimeout(() => {
      // Set form values as if fetched from an API
      Object.keys(mockData).forEach((key) => {
        setFieldValue(key, mockData[key]);
      });
    }, 3000); // Simulate API call delay of 1 second
  }, [setFieldValue]);
  return (
    <div style={{ display: "grid", justifyContent: "center" }}>
      <h1>Config Driven form</h1>
      <form onSubmit={handleSubmit}>
        <FormWrapper
          formData={formData}
          formState={formState}
          setFieldValue={setFieldValue}
          gridStyle={gridStyle}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
