import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <div>
      <Link href="/campaigns">
        <Button>
          Kampanyalar
        </Button>
      </Link>
      <Link href="/template">
        <Button>
          Template
        </Button>
      </Link>
    </div>
  );
}
