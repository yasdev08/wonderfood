import { Clock3, MessageCircle, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-primary/10 bg-primary/95 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div>
          <p className="text-xl font-semibold">Wonder Food&apos;s Maraval</p>
          <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
            Des crêpes, gaufres et desserts premium préparés à la demande pour
            satisfaire toutes vos envies gourmandes.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Visitez-Nous !
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <Link href="https://maps.app.goo.gl/J6BxfzVzYgg7Aecx7">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Rue Mekki Khelifa Ave, Oran 31000
                </li>
              </Link>
              <Link href="tel:+213660570102">
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  +213660570102
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Heurs
            </p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <Clock3 className="h-4 w-4" />
                Mon–Sun: 10:00–22:00
              </li>
              <Link href="https://lnk.bio/wonderfoods31">
                <li className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4" />
                  @wonderfoods31
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-1 px-4 py-4 text-center text-xs text-primary-foreground/70 sm:flex-row">
          <span>© 2026 Wonder Food&apos;s. Préparé avec douceur.</span>
          <span className="sm:ml-2">
            Site créé par <Link href="https://lnk.bio/mbpub31">MB Pub</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
