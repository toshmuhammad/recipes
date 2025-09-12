import { useEffect } from "react";
import { data, Form, useActionData } from "react-router-dom";
import { customFetch } from "../utils";

export const action = async({ request }) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const age = formData.get("age");
  return { title, age };
};

function Home() {
  useEffect(()=> {
    customFetch("?slug=avocado-tomato-wholegrain-toast")
    .then((data) => console.log(data))
    .catch(() => {});
  }, []);
  return <div></div>;
}

export default Home;












// function Home() {
//   return (
//     <div>
//       <a className="btn" href="">Start exploring</a>
//     </div>
//   )
// }

// export default Home;