import { CHECKOUT_URL } from "@/lib/copy";
import { footer } from "@/lib/copy";
import { Shell } from "@/components/section";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper py-16 sm:py-20">
      <Shell className="max-w-3xl space-y-6 text-pretty text-sm leading-6 text-mute">
        <p>{footer.skool}</p>
        <p>{footer.results}</p>
        <p>
          <a
            href={CHECKOUT_URL}
            className="text-ink underline-offset-4 hover:underline"
          >
            skool.com/aifoundersvault
          </a>
        </p>
        <p>{footer.copyright}</p>
      </Shell>
    </footer>
  );
}
