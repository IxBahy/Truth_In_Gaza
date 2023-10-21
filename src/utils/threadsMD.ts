import first_fr from "../ThreadsMarkDown/first/fr.md";
import first_en from "../ThreadsMarkDown/first/en.md";
import first_ch from "../ThreadsMarkDown/first/ch.md";
import first_es from "../ThreadsMarkDown/first/es.md";
import first_grk from "../ThreadsMarkDown/first/grk.md";
import first_hi from "../ThreadsMarkDown/first/hi.md";
import first_it from "../ThreadsMarkDown/first/it.md";
import first_ko from "../ThreadsMarkDown/first/ko.md";
import first_ku from "../ThreadsMarkDown/first/ku.md";
import first_no from "../ThreadsMarkDown/first/no.md";
import first_pt from "../ThreadsMarkDown/first/pt.md";
import first_ru from "../ThreadsMarkDown/first/ru.md";
import first_sv from "../ThreadsMarkDown/first/sv.md";
import first_tr from "../ThreadsMarkDown/first/tr.md";

export type languages =
	| "en"
	| "ch"
	| "fr"
	| "es"
	| "grk"
	| "hi"
	| "it"
	| "ko"
	| "ku"
	| "no"
	| "pt"
	| "ru"
	| "sv"
	| "tr";
export type threadType = "first" | "second" | "third" | "fourth" | "fifth";
type thread = string;
type threadsObject = {
	[k in languages]: { [k in threadType]?: thread };
};
export const ThreadsObject: threadsObject = {
	en: { first: first_en },
	ch: { first: first_ch },
	fr: { first: first_fr },
	es: { first: first_es },
	hi: { first: first_hi },
	it: { first: first_it },
	ko: { first: first_ko },
	ku: { first: first_ku },
	pt: { first: first_pt },
	ru: { first: first_ru },
	sv: { first: first_sv },
	tr: { first: first_tr },
	no: { first: first_no },
	grk: { first: first_grk },
};
