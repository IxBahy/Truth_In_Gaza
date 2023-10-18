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
	{
		image: new URL("../../public/children/12.webp", import.meta.url).href,
		tweetID: "1714737496431681537",
	},
	{
		image: new URL("../../public/children/13.webp", import.meta.url).href,
		tweetID: "1714725648248230243",
	},
	{
		image: new URL("../../public/children/14.webp", import.meta.url).href,
		tweetID: "1714723637108916705",
	},
	{
		image: "https://pbs.twimg.com/media/F8v0SJzWQAAB7VS?format=jpg&name=small",
		tweetID: "1714732686747574325",
	},
	{
		image: "https://pbs.twimg.com/media/F8Wjz5aXcAA6Etj?format=jpg&name=small",
		tweetID: "1712955370677674227",
	},
];
//////////////////////////////////////////////////////
//////////////////// Women ///////////////////////////
//////////////////////////////////////////////////////
const womenTweets: tweet[] = [
	{
		image:
			"https://pbs.twimg.com/media/F8jXVktXwAAdZa8?format=jpg&name=360x360",
		tweetID: "1713856441121902891",
	},
	{
		image: new URL("../../public/women/1.webp", import.meta.url).href,
		tweetID: "1714680119644565522",
	},
];
//////////////////////////////////////////////////////
//////////////////// Medic ///////////////////////////
//////////////////////////////////////////////////////
const medicTweets: tweet[] = [
	{
		image:
			"https://pbs.twimg.com/media/F8qFMs1WoAAKmfu?format=jpg&name=900x900",
		tweetID: "1714329068252930527",
	},
	{
		image: new URL("../../public/medic/3.webp", import.meta.url).href,
		tweetID: "1714368847677919703",
	},
	{
		image: new URL("../../public/medic/4.webp", import.meta.url).href,
		tweetID: "1714724743260123627",
	},
	{
		image: new URL("../../public/medic/5.webp", import.meta.url).href,
		tweetID: "1714693167499313439",
	},
];

//////////////////////////////////////////////////////
//////////////////// Homes ///////////////////////////
//////////////////////////////////////////////////////
const homesTweets: tweet[] = [
	{
		image: new URL("../../public/Homes/1.webp", import.meta.url).href,
		tweetID: "1711427665897677254",
	},
	{
		image: new URL("../../public/Homes/2.webp", import.meta.url).href,
		tweetID: "1712563063600410893",
	},
	{
		image: new URL("../../public/Homes/3.webp", import.meta.url).href,
		tweetID: "1714735138846777368",
	},
	{
		image: "https://pbs.twimg.com/media/F8jgsFwWYAA7r1_?format=jpg&name=small",
		tweetID: "1713866709436624902",
	},
];

/////////////////////////////////////////////////////////////
export const tweetsData: tweetsData = {
	Children: childrenTweets,
	Homes: homesTweets,
	Medic: medicTweets,
	Women: womenTweets,
};
