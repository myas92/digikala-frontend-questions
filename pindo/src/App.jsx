import React from "react";
import FormItem from "./components/FormItem";
import Button from "./components/Button";
import "./App.css";

function App({ onSubmit, fields }) {
  return (
    <div className="form">
      {
        // Should change here
      }
      {fields.map((data) => (
        <FormItem key={data.name} className="form__item" {...data} />
      ))}
      {
        // Add submit functionality
      }
      <Button>ثبت</Button>
    </div>
  );
}

export default App;
