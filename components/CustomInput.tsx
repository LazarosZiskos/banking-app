import { Control, FormProps } from "react-hook-form";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { authFormScema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof authFormScema>>;
  name: "email" | "password";
  label: string;
  placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="w-full flex flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                {...field}
                className="input-class"
                type={name === "password" ? "password" : "text"}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
