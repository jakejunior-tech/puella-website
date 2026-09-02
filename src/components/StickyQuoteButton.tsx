import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function StickyQuoteButton() {
  return (
    <div className="fixed bottom-4 inset-x-3 z-40 sm:hidden">
      <Link
        href="/contact"
        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg shadow-primary/30 border border-primary-dark/20"
      >
        <MessageSquare className="h-4 w-4" />
        Request a Quote
      </Link>
    </div>
  );
}