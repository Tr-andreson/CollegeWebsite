"use client"
import { useParams } from "next/navigation";

const Visites = () => {
  const params = useParams();
  console.log(params, "ppp")
  const id = params.visits; // Get dynamic param

  return (
    <div className="p-4">
      <h4 className="text-3xl">Visites home</h4>
      <p>Parameter from URL: {id}</p>
    </div>
  );
};

export default Visites;
