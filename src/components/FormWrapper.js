import TextField from "./TextField";
import SelectField from "./SelectField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";

// export default memo(FormWrapper);
const FormWrapper = ({ formData, gridStyle, formState, setFieldValue }) => {
  return (
    <div style={{ gridStyle }}>
      {formData.map((field) => {
        switch (field.control) {
          case "INPUT":
            return (
              <TextField
                key={field.name}
                type={field.type}
                label={field.label}
                name={field.name}
                value={formState[field.name]}
                setFieldValue={setFieldValue}
              />
            );

          case "SELECT":
            return (
              <SelectField
                key={field.name}
                label={field.label}
                name={field.name}
                value={formState[field.name]}
                options={field.options}
                setFieldValue={setFieldValue}
              />
            );
          case "RADIO":
            return (
              <RadioField
                key={field.name}
                label={field.label}
                name={field.name}
                options={field.options}
                value={formState[field.name]}
                setFieldValue={setFieldValue}
              />
            );
          case "CHECKBOX":
            return (
              <CheckboxField
                key={field.name}
                label={field.label}
                name={field.name}
                options={field.options}
                value={formState[field.name]}
                setFieldValue={setFieldValue}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default FormWrapper;
