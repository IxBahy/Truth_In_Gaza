export type tweet = {
	image: string;
	tweetID: string;
};
export type tweetsType = "Women" | "Children" | "Medic" | "Homes";
type tweetsData = { [k in tweetsType]: tweet[] };

//////////////////////////////////////////////////////
/////////////////// Children /////////////////////////
//////////////////////////////////////////////////////
const childrenTweets: tweet[] = [
	{
		image: "https://pbs.twimg.com/media/F8q1q7qXEAAP25c?format=jpg&name=medium",
		tweetID: "1714373013972640249",
	},
	{
		image: new URL("../../public/children/1.webp", import.meta.url).href,
		tweetID: "1714706412675203145",
	},
	{
		image: new URL("../../public/children/2.webp", import.meta.url).href,
		tweetID: "1714654597120151995",
	},
	{
		image: new URL("../../public/children/3.webp", import.meta.url).href,
		tweetID: "1714669479416734057",
	},
	{
		image: new URL("../../public/children/4.webp", import.meta.url).href,
		tweetID: "1714695422013268412",
	},
	{
		image: new URL("../../public/children/5.webp", import.meta.url).href,
		tweetID: "1714662469929521308",
	},
	{
		image: new URL("../../public/children/6.webp", import.meta.url).href,
		tweetID: "1714358677858124095",
	},
	{
		image: new URL("../../public/children/7.webp", import.meta.url).href,
		tweetID: "1714445343784305122",
	},
	{
		image: new URL("../../public/children/8.webp", import.meta.url).href,
		tweetID: "1714685373702422752",
	},
	{
		image: new URL("../../public/children/9.webp", import.meta.url).href,
		tweetID: "1714688100679491729",
	},
	{
		image: "https://pbs.twimg.com/media/F8q7ZlOXoAAzwta?format=jpg&name=small",
		tweetID: "1714388713751347361",
	},
	{
		image: new URL("../../public/children/10.webp", import.meta.url).href,
		tweetID: "1714712430759026739",
	},
	{
		image:
			"https://pbs.twimg.com/media/F8t4IlgXQAACsef?format=jpg&name=900x900",
		tweetID: "1714596179407745213",
	},
	{
		image: new URL("../../public/children/11.webp", import.meta.url).href,
		tweetID: "1714596526863884389",
	},
];
//////////////////////////////////////////////////////
//////////////////// Women ///////////////////////////
//////////////////////////////////////////////////////
const womenTweets: tweet[] = [];

//////////////////////////////////////////////////////
//////////////////// Medic ///////////////////////////
//////////////////////////////////////////////////////
const medicTweets: tweet[] = [];

//////////////////////////////////////////////////////
//////////////////// Homes ///////////////////////////
//////////////////////////////////////////////////////
const homesTweets: tweet[] = [];

/////////////////////////////////////////////////////////////
export const tweetsData: tweetsData = {
	Children: childrenTweets,
	Homes: homesTweets,
	Medic: medicTweets,
	Women: womenTweets,
};
