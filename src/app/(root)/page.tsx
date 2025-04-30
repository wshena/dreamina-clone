import { getCurrentUser } from "@/utils/actions/auth.action";

export default async function Home() {
  const currentUser = await getCurrentUser();
  console.log(currentUser)
  
  return (
    <div className="">
      <h1>hello world</h1>
    </div>
  );
}
