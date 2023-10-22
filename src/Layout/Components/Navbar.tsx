import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ListItem } from "@/components/ui/ListItem";
import { Link } from "react-router-dom";
const Navbar = () => {
	//To do create sections lists
	const sections: { title: string; href: string; description: string }[] = [
		{
			title: "Children",
			href: "/Crimes/Children",
			description: "photos and proofs of Isreal killing babies and children",
		},
		{
			title: "Women",
			href: "/Crimes/Women",
			description:
				"photos and proofs of Isreal bombing mothers with ther children and other barbaric acts aginest women",
		},
		{
			title: "Medics",
			href: "/Crimes/Medic",
			description:
				"photos and proofs of Isreal  bombing hospitals and killing doctors",
		},
		{
			title: "Homes",
			href: "/Crimes/Homes",
			description: "photos and proofs of Isreal leveling Gaza",
		},
	];
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							Understand the situation
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="bg-red-900 text-gray-200 grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<NavigationMenuLink asChild>
									<Link to="/">
										<li className="row-span-3">
											<div className="mb-2 mt-4 text-lg font-medium">
												History of the Conflict
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												This website is to address the truth of the Palestine
												and Isreal conflict
											</p>
										</li>
									</Link>
								</NavigationMenuLink>
								<ListItem href="/Threads" title="Read The Threds">
									here you will find threads explaining what happened from "DATE
									HERE" to know in many languages we encourage you to search
									more about it even from other sources Always seek the truth
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>Isreal War Crimes</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="bg-red-900 text-gray-200 grid w-[360px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{sections.map((section) => (
									<ListItem
										key={section.title}
										title={section.title}
										href={section.href}
									>
										{section.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	);
};

export default Navbar;
