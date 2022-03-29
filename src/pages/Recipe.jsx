import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMealDetails } from "../api";
function Recipe() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMealDetails(id).then((data) => setDetails(data.meals));
  }, []);
}

export { Recipe };
