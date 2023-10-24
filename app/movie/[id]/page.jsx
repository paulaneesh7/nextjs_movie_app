export const dynamic = "force-dynamic";
import SubmitButton from "../../../components/SubmitButton.jsx";
import { db } from "../../db.js";
import { revalidatePath } from "next/cache";
import { MoveRight } from "lucide-react";

async function getData(id) {
  const data = await db.comment.findMany({
    where: {
      movieId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

async function postData(formData) {
  "use server";

  const data = await db.comment.create({
    data: {
      message: formData.get("comment"),
      movieId: formData.get("id"),
    },
  });

  revalidatePath("/movie/[id]");
}

export default async function Page({ params }) {
  const data = await getData(params.id);

  return (
    <div className="rounded-lg md:p-3">
      <h1 className="text-2xl text-center md:text-4xl font-semibold mb-5">
        Your Opinion
      </h1>

      <div>
        <form action={postData}>
          <textarea
            name="comment"
            className="w-full rounded-lg p-2 outline-teal-400 text-black"
            placeholder="add your comment..."
          ></textarea>
          <input type="hidden" name="id" value={params.id} />
          <SubmitButton />
        </form>

        <div className="mt-5 flex flex-col gap-y-3">
          <h2 className="text-lg md:text-xl font-semibold underline">
            Comments
          </h2>
          {data.map((post) => (
            <div key={post.id} className="flex gap-1 items-center">
              <MoveRight size={10} />
              <p className="text-sm">{post.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
