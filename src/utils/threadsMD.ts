import first_fr from "../../public/ThreadsMarkDown/first/fr.md";
import first_en from "../../public/ThreadsMarkDown/first/en.md";
import first_ch from "../../public/ThreadsMarkDown/first/ch.md";
import first_es from "../../public/ThreadsMarkDown/first/es.md";
import first_grk from "../../public/ThreadsMarkDown/first/grk.md";
import first_hi from "../../public/ThreadsMarkDown/first/hi.md";
import first_it from "../../public/ThreadsMarkDown/first/it.md";
import first_ko from "../../public/ThreadsMarkDown/first/ko.md";
import first_ku from "../../public/ThreadsMarkDown/first/ku.md";
import first_no from "../../public/ThreadsMarkDown/first/no.md";
import first_pt from "../../public/ThreadsMarkDown/first/pt.md";
import first_ru from "../../public/ThreadsMarkDown/first/ru.md";
import first_sv from "../../public/ThreadsMarkDown/first/sv.md";
import first_tr from "../../public/ThreadsMarkDown/first/tr.md";
////////////////////////////////////////////////////////////////
///////////////////////// Second ///////////////////////////////
////////////////////////////////////////////////////////////////
import second_en from "../../public/ThreadsMarkDown/second/en.md";
import second_es from "../../public/ThreadsMarkDown/second/es.md";
import second_fr from "../../public/ThreadsMarkDown/second/fr.md";
import second_it from "../../public/ThreadsMarkDown/second/it.md";
import second_ko from "../../public/ThreadsMarkDown/second/ko.md";
import second_ru from "../../public/ThreadsMarkDown/second/ru.md";
import second_sv from "../../public/ThreadsMarkDown/second/sv.md";
import second_tr from "../../public/ThreadsMarkDown/second/tr.md";

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
	en: { first: first_en, second: second_en },
	ch: { first: first_ch },
	fr: { first: first_fr, second: second_fr },
	es: { first: first_es, second: second_es },
	hi: { first: first_hi },
	it: { first: first_it, second: second_it },
	ko: { first: first_ko, second: second_ko },
	ku: { first: first_ku },
	pt: { first: first_pt },
	ru: { first: first_ru, second: second_ru },
	sv: { first: first_sv, second: second_sv },
	tr: { first: first_tr, second: second_tr },
	no: { first: first_no },
	grk: { first: first_grk },
};

export type threadPreview = {
	name: string;
	img: string;
	type: threadType;
};

const firstThreadPreview: threadPreview = {
	name: "#1 History of the Conflict",
	img: new URL("../../public/threadsimages/first/002.jpeg", import.meta.url)
		.href,
	type: "first",
};
const secondThreadPreview: threadPreview = {
	name: "#2 media hypocrisy",
	img: new URL("../../public/threadsimages/second/002.jpeg", import.meta.url)
		.href,
	type: "second",
};
const thirdThreadPreview: threadPreview = {
	name: "#3",
	img: new URL("../../public/threadsimages/first/002.jpeg", import.meta.url)
		.href,
	type: "third",
};
const fourthThreadPreview: threadPreview = {
	name: "#4",
	img: new URL("../../public/threadsimages/first/002.jpeg", import.meta.url)
		.href,
	type: "fourth",
};
const fifthThreadPreview: threadPreview = {
	name: "#5",
	img: new URL("../../public/threadsimages/first/002.jpeg", import.meta.url)
		.href,
	type: "fifth",
};
export const threadTablePreviewCards: { [k in languages]: threadPreview[] } = {
	en: [firstThreadPreview, secondThreadPreview],
	ch: [firstThreadPreview],
	es: [firstThreadPreview, secondThreadPreview],
	fr: [firstThreadPreview, secondThreadPreview],
	grk: [firstThreadPreview],
	hi: [firstThreadPreview],
	it: [firstThreadPreview, secondThreadPreview],
	ko: [firstThreadPreview, secondThreadPreview],
	ku: [firstThreadPreview],
	no: [firstThreadPreview],
	pt: [firstThreadPreview],
	ru: [firstThreadPreview, secondThreadPreview],
	sv: [firstThreadPreview, secondThreadPreview],
	tr: [firstThreadPreview, secondThreadPreview],
};
