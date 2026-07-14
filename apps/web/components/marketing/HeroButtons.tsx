import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Link href="/signup">
        <Button size="lg">
          Start Free →
        </Button>
      </Link>

      <Link href="#demo">
        <Button variant="secondary" size="lg">
          Watch Demo
        </Button>
      </Link>
    </div>
  );
}