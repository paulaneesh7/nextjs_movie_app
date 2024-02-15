export const dynamic = "force-dynamic";
import SubmitButton from "../../../components/SubmitButton.jsx";
import { db } from "../../db.js";
import { revalidatePath } from "next/cache";
import { MoveRight } from "lucide-react";

// async function getData(id) {
//   const data = await db.comment.findMany({
//     where: {
//       movieId: id,
//     },
//     orderBy: {
//       createdAt: "desc",
//     },
//   });

//   return !data ? "" : data;
// }

// async function postData(formData) {
//   "use server";

//   const data = await db.comment.create({
//     data: {
//       message: formData.get("comment"),
//       movieId: formData.get("id"),
//     },
//   });

//   revalidatePath("/movie/[id]");
// }

export default async function Page({ params }) {
  // const data = await getData(params.id);

  return (
    <div className="p-3 border-2 border-red-500 rounded-xl md:p-3">
      <h2 className="mb-2 font-bold text-center text-red-500 text-md md:text-xl">Currently this section is not working!!!</h2>
      <h1 className="mb-5 text-2xl font-semibold text-center md:text-4xl">
        Your Opinion
      </h1>

      <div>
        {/* <form action={postData}> */}
        <form action=''>
          <textarea
            name="comment"
            className="w-full p-2 text-black rounded-lg outline-teal-400"
            placeholder="add your comment..."
          ></textarea>
          <input type="hidden" name="id" value={params.id}/>
          <SubmitButton />
        </form>

        <div className="flex flex-col mt-5 gap-y-3">
          <h2 className="text-lg font-semibold underline md:text-xl">
            Comments
          </h2>
          {/* {data.map((post) => (
            <div key={post.id} className="flex items-center gap-1">
              <MoveRight size={10} />
              <p className="text-sm">{post.message}</p>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
