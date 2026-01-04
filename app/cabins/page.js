import Counter from "../components/Counter";

export default async function Page() {
  const res = await fetch("https://jsonplaceholder.org/posts");
  const data = await res.json();
  // console.log(data);
  return (
    <div>
      <h1>Cabins page</h1>
      <Counter posts={data} />
    </div>
  );
}
