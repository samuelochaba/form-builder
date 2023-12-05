import { GetForms } from "@/actions/form";
import React from "react";
import FormCard from "./FormCard";

async function FormCards() {
  const forms = GetForms();
  return (
    <>
      {(await forms).map((form) => (
        <FormCard form={form} />
      ))}
    </>
  );
}

export default FormCards;
