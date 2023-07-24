// Fetch Data w/ native React Fetch

import { useState } from "react";
import { ProfileResponse } from "./profile-types";

export const useProfile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userData, setUserData] = useState<ProfileResponse | null>(null);
  const [error, setError] = useState<string>("");

  const getUserData = (userId: number) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response: Response) => {
        setIsLoading(false);
        if (response.ok) {
          return response.json();
        }
        setIsLoading(false);
        throw "Something went wrong";
      })
      .then((data: ProfileResponse) => {
        setUserData(data);
      })
      .catch((err) => {
        setError("Something went wrong");
        console.log(err);
      });
    setIsLoading(false);
  };

  return { getUserData, isLoading, error, userData };
};
