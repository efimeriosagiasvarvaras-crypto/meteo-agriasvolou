export default function MeteoAgriasPublicPage() {
  const dashboardUrl =
    'https://smart-agrogenius.tago.run/dashboards/info/67fd6123eff26b000a5a4232?anonymousToken=00000000-6793-4c48-e8e5-73000ae5964b';

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-20 mb-4 rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo-placeholder.svg"
                alt="Meteo Αγριάς"
                className="h-12 w-12 rounded-2xl object-cover ring-1 ring-white/10"
              />
              <div>
                <p className="text-lg font-semibold tracking-tight sm:text-xl">Meteo Αγριάς</p>
                <p className="text-xs text-slate-300 sm:text-sm">
                  Τοπική μετεωρολογική ενημέρωση σε πραγματικό χρόνο
                </p>
              </div>
            </div>

            <nav className="hidden items-center gap-2 md:flex">
              <a href="#live" className="rounded-2xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                Ζωντανή προβολή
              </a>
              <a href="#bulletin" className="rounded-2xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                Δελτίο
              </a>
              <a href="#about" className="rounded-2xl px-3 py-2 text-sm text-slate-200 transition hover:bg-white/10">
                Πληροφορίες
              </a>
              <a
                href={dashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Άνοιγμα πηγής
              </a>
            </nav>
          </div>
        </header>

        <main className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[28px] border border-white/10 bg-gradient-to-br from-cyan-500/15 via-slate-900 to-blue-700/10 p-5 shadow-2xl sm:p-6">
            <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100">
              Δημόσια προβολή για κινητό και web
            </div>
            <h1 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-5xl">
              Ζωντανά δεδομένα καιρού για την Αγριά Βόλου
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base sm:leading-7">
              Η παρούσα δημόσια σελίδα αντλεί εικόνα από τον ενεργό μετεωρολογικό σταθμό της περιοχής
              και προσφέρει άμεση πρόσβαση σε ζωντανά δεδομένα, γραφήματα και τοπική ενημέρωση, με πλήρη
              προτεραιότητα στη χρήση από κινητό.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Κατάσταση</p>
                <p className="mt-2 text-lg font-semibold">Live σύνδεση</p>
                <p className="mt-1 text-sm text-slate-300">Σύνδεση με το δημόσιο dashboard του σταθμού</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Ρυθμός ενημέρωσης</p>
                <p className="mt-2 text-lg font-semibold">Ανά 5 λεπτά</p>
                <p className="mt-1 text-sm text-slate-300">Σύμφωνα με την τρέχουσα πηγή δεδομένων</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">Προβολή</p>
                <p className="mt-2 text-lg font-semibold">Mobile-first</p>
                <p className="mt-1 text-sm text-slate-300">Βελτιστοποιημένη για κινητό και tablet</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#live"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Προβολή live σταθμού
              </a>
              <a
                href={dashboardUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Άνοιγμα σε νέα καρτέλα
              </a>
            </div>
          </section>

          <aside className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Τοπική ενημέρωση</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight">Τι προσφέρει τώρα η σελίδα</h2>
            <div className="mt-5 space-y-3">
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-medium">Ζωντανή εικόνα πεδίου</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Άμεση πρόσβαση στα ενεργά δεδομένα του σταθμού χωρίς να χρειάζεται ξεχωριστή εφαρμογή.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-medium">Έτοιμη για δημόσια χρήση</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Μπορεί να ανοίγει από κινητό, να αποστέλλεται ως σύνδεσμος και να χρησιμοποιείται ως κεντρικό σημείο αναφοράς.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-4">
                <p className="text-sm font-medium">Έτοιμη για αναβάθμιση</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">
                  Όταν δοθεί token, η ίδια βάση θα μετατραπεί σε πλήρη αυτόνομη εφαρμογή με κάρτες, alerts και δικά της γραφήματα.
                </p>
              </div>
            </div>
          </aside>
        </main>

        <section id="live" className="mt-4 rounded-[28px] border border-white/10 bg-white/5 p-3 shadow-2xl sm:p-4">
          <div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">Ζωντανό dashboard σταθμού</h2>
              <p className="mt-1 text-sm text-slate-300">
                Προσωρινή live ενσωμάτωση έως τη λήψη του επίσημου token διασύνδεσης.
              </p>
            </div>
            <a
              href={dashboardUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Άνοιγμα πηγής
            </a>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-white">
            <iframe
              src={dashboardUrl}
              title="Meteo Αγριάς live dashboard"
              className="h-[78vh] w-full"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="mt-3 text-xs leading-5 text-slate-400">
            Αν η ενσωματωμένη προβολή δεν φορτώσει σε ορισμένες συσκευές λόγω εξωτερικών περιορισμών,
            ο σύνδεσμος «Άνοιγμα πηγής» οδηγεί άμεσα στην πλήρη δημόσια σελίδα του σταθμού.
          </p>
        </section>

        <section id="bulletin" className="mt-4 grid gap-4 lg:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Δελτίο</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Σύντομη δημόσια ενημέρωση</h3>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Η παρούσα σελίδα λειτουργεί ως κεντρικό δημόσιο σημείο πρόσβασης στα τοπικά μετεωρολογικά δεδομένα της Αγριάς.
              Η εικόνα ενημερώνεται σύμφωνα με τη διαθέσιμη πηγή του σταθμού και έχει σχεδιαστεί ώστε να είναι πλήρως
              ευανάγνωστη από κινητό τηλέφωνο.
            </p>
          </div>

          <div id="about" className="rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Ταυτότητα</p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight">Meteo Αγριάς</h3>
            <p className="mt-4 text-sm leading-7 text-slate-200">
              Δημόσια μετεωρολογική σελίδα για την περιοχή της Αγριάς Βόλου, με στόχο τη σταδιακή εξέλιξη σε πλήρη
              πλατφόρμα τοπικής ενημέρωσης και έγκαιρης ειδοποίησης για πολίτες, αγρότες και φορείς πολιτικής προστασίας.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
