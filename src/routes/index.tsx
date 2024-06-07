import { A } from "@solidjs/router";
import Counter from "~/components/Counter";
import { createSignal } from "solid-js";

export default function Home() {
  const [count, setCount] = createSignal(0);
  return (
      <div class="rounded-lg w-90 h-dvh bg-gray-700">
        
      </div>
  );
}
