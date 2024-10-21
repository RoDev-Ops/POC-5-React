import PostComponent from "./components/PostComponent";

export default function Home() {
  return (
    PostComponent({title: "Hello World", content: "This is a blog post."})
  );
}
