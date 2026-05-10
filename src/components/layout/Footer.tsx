export default function Footer() {
    return (
        <footer className="w-full border-t border-slate-200/10 bg-slate-100 dark:bg-slate-950">
<div className="flex flex-col md:flex-row justify-between items-center px-12 py-8 w-full">
<div className="text-lg font-black text-slate-800 dark:text-slate-200 mb-4 md:mb-0">
                Mariam's Portfolio
            </div>
<div className="text-xs uppercase tracking-widest font-medium text-slate-500 dark:text-slate-500 text-center md:text-left">
                © 2024 Mariam's Portfolio. Built with precision and transparency.
            </div>
<div className="flex gap-8 mt-6 md:mt-0 text-xs uppercase tracking-widest font-medium">
<a className="text-slate-500 dark:text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="https://github.com/mariam-ossama">GitHub</a>
<a className="text-slate-500 dark:text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="linkedin.com/in/mariam-m-osama-738005281">LinkedIn</a>
<a className="text-slate-500 dark:text-slate-500 hover:text-indigo-500 transition-colors opacity-80 hover:opacity-100" href="#">Source Code</a>
</div>
</div>
</footer>
    );
}