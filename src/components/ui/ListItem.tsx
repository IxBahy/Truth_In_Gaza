import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";
import React from "react";
import { Link } from "react-router-dom";

export const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<Link
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className
					)}
					to={href ? href : ""}
					{...props}
				>
					<div className="text-sm font-medium leading-none underline">
						{title}
					</div>
					<p className=" text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</Link>
			</NavigationMenuLink>
		</li>
	);
});
ListItem.displayName = "ListItem";
