import { useState } from "react";

const UseForm = ({ defaultValues, onSubmit, validate }) => {
  const [formState, setFormState] = useState(defaultValues);
  const [errors, setErrors] = useState({});

  // Function to set all values at once
  const setValues = (newValues) => {
    setFormState((prevState) => ({
      ...prevState,
      ...newValues,
    }));
  };

  // Function to set a specific field value
  const setFieldValue = (fieldName, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data before submitting
    // if (validate) {
    //   const validationErrors = validate(formState);
    //   setErrors(validationErrors); // Update errors

    //   // If there are no errors, call onSubmit
    //   if (Object.keys(validationErrors).length === 0) {
    //     if (onSubmit) {
    //       onSubmit(formState);
    //     }
    //   }
    // }
    onSubmit(formState);
  };

  return {
    formState: {
      ...formState,
      setValues,
      setFieldValue,
      errors, // Include errors for validation
      handleSubmit,
    },
    setFormState, // To allow direct updating of form state if needed
  };
};

export default UseForm;
