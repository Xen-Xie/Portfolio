import React from "react";
import { CircularProgress } from "@heroui/react";

export default function CircularProgressWithValue() {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => {
        if (v >= 100) {
          clearInterval(interval);
          return 100;
        }
        return v + 7; // slower and even smoother
      });
    }, 100); // smoother timing

    return () => clearInterval(interval);
  }, []);

  const skills = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "UX/UI"];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-6 gap-8 place-items-center py-10 px-5">
      {skills.map((skill, index) => {
        const displayValue = (index === skills.length - 1 && value === 100) ? 90 : value;

        return (
          <div key={index} className="flex flex-col items-center">
            <CircularProgress
              aria-label={`${skill} Loading`}
              color="warning"
              showValueLabel={true}
              size="lg"
              value={displayValue}
              classNames={{
                svg: "w-32 h-32 sm:w-36 sm:h-36 drop-shadow-md",
                indicator: "stroke-clean dark:stroke-ground",
                track: "stroke-clean/10 dark:stroke-ground/10",
                value: "text-2xl font-semibold",
              }}
            />
            <p className="mt-3 text-lg font-medium text-center font-poppins text-clean dark:text-ground">
              {skill}
            </p>
          </div>
        );
      })}
    </div>
  );
}
